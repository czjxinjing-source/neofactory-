$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

$Host.UI.RawUI.WindowTitle = "工造星球"
$url = "http://localhost:5173/"

Start-Process $url
npm run dev -- --port 5173
