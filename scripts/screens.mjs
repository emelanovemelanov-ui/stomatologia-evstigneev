import { chromium } from "@playwright/test";
import { mkdirSync } from "fs";

const base = process.env.BASE || "http://localhost:3200";
const out = process.env.OUT || "screens";
const pages = (process.env.PAGES || "/,/services/,/doctors/,/contacts/,/privacy/").split(",");
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
for (const [name, viewport] of [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
]) {
  const page = await browser.newPage({ viewport });
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");
    const report = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const offenders = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width && (r.right > vw + 1 || r.left < -1)) {
          let clipped = false;
          for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
            const o = getComputedStyle(p).overflowX;
            if (o !== "visible") {
              const pr = p.getBoundingClientRect();
              clipped = pr.right <= vw + 1 && pr.left >= -1;
              break;
            }
          }
          if (!clipped) offenders.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 60)} → ${Math.round(r.right - vw)}px`);
        }
      }
      const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src);
      return {
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        offenders: offenders.slice(0, 5),
        broken,
      };
    });
    const file = `${out}/${name}${p === "/" ? "-home" : p.replaceAll("/", "-")}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file, "overflow:", report.overflow, report.offenders.length ? report.offenders : "", report.broken.length ? { broken: report.broken } : "");
  }
  await page.close();
}
await browser.close();
