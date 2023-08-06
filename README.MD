In Windows sometimes you get `Error: EPERM: operation not permitted`.
You can use this hack to install browser binaries in the same place as you run the tests

$ScriptPath = (Get-Item -Path ".\" -Verbose).FullName
$Env:PLAYWRIGHT_BROWSERS_PATH = Join-Path -Path $ScriptPath -ChildPath "pw-browsers"

Then perform a `npx playwright install`

And when you run the tests, use the same powershell instance to remember the ENV variable new path you have set up or repeat the above code before running the test if different terminal/powershell instance is being used.

Equivalent to the above for linux you can do:
`export PLAYWRIGHT_BROWSERS_PATH=$(realpath "$(dirname "$0")/pw-browsers")`
Then perform a `npx playwright install` to install the binaries in the same folder as you run the script