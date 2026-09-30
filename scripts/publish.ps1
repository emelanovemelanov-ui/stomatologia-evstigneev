# Builds the static site and force-pushes ./out to the gh-pages branch.
# Usage from the project folder: .\scripts\publish.ps1
# Without the custom domain: .\scripts\publish.ps1 -Domain "" -BasePath "/stomatologia-evstigneev"
param(
  [string]$Domain = "devstigneev.ru",
  [string]$BasePath = ""
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
  $remote = git remote get-url origin
  $env:NEXT_PUBLIC_BASE_PATH = $BasePath
  $env:NEXT_TELEMETRY_DISABLED = "1"
  npm run build
  if ($LASTEXITCODE -ne 0) { throw "Сборка не удалась" }
  Remove-Item Env:NEXT_PUBLIC_BASE_PATH -ErrorAction SilentlyContinue

  $tmp = Join-Path $env:TEMP "clinic-gh-pages"
  if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }
  Copy-Item -Recurse out $tmp
  New-Item -ItemType File (Join-Path $tmp ".nojekyll") | Out-Null
  if ($Domain) { Set-Content -Path (Join-Path $tmp "CNAME") -Value $Domain -NoNewline -Encoding ascii }

  Push-Location $tmp
  try {
    git init -q -b gh-pages
    git add -A
    git -c user.name="publish" -c user.email="publish@users.noreply.github.com" commit -q -m "Публикация $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git push -f -q $remote gh-pages
  } finally {
    Pop-Location
  }
  Remove-Item -Recurse -Force $tmp
  Write-Host "Опубликовано. Сайт обновится через 1–2 минуты."
} finally {
  Pop-Location
}
