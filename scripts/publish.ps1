# Builds the static site and force-pushes ./out to the gh-pages branch.
# Usage from the project folder: .\scripts\publish.ps1
# With a custom domain on GitHub Pages: .\scripts\publish.ps1 -BasePath ""
param([string]$BasePath = "/stomatologia-evstigneev")

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
  $remote = git remote get-url origin
  $env:NEXT_PUBLIC_BASE_PATH = $BasePath
  $env:NEXT_TELEMETRY_DISABLED = "1"
  npm run build
  if ($LASTEXITCODE -ne 0) { throw "Сборка не удалась" }
  Remove-Item Env:NEXT_PUBLIC_BASE_PATH

  $tmp = Join-Path $env:TEMP "clinic-gh-pages"
  if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }
  Copy-Item -Recurse out $tmp
  New-Item -ItemType File (Join-Path $tmp ".nojekyll") | Out-Null

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
