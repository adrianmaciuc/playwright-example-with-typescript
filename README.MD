# Playwright Framework with Typescript

> It will run E2E tests 
> Trigger Github Action workflow to run in full parallelisation using --shard
> Generate html reports
> Publish the reports on github pages
> It includes workflow and script to manually trigger cleanup of old reports (can be customized for cron job)

## Framework structure

Use of test fixture concept. [Test fixtures](https://playwright.dev/docs/test-fixtures#introduction) are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. With fixtures, you can group tests based on their meaning, instead of their common setup.

Follows also the common convention `Page Object Model`, being fully [compatible with playwright](https://playwright.dev/docs/pom)


> **Note**  

> In Windows sometimes you get `Error: EPERM: operation not permitted`.
> You can use this hack to install browser binaries in the same place as you run the tests

> `$ScriptPath = (Get-Item -Path ".\" -Verbose).FullName`
> `$Env:PLAYWRIGHT_BROWSERS_PATH = Join-Path -Path $ScriptPath -ChildPath "pw-browsers"`

> Then perform a `npx playwright install`

>And when you run the tests, use the same powershell instance to remember the ENV variable new path you have set up or repeat the above code before running the test if different terminal/powershell instance is being used.

> Equivalent to the above for linux you can do:
> `export PLAYWRIGHT_BROWSERS_PATH=$(realpath "$(dirname "$0")/pw-browsers")`
> Then perform a `npx playwright install` to install the binaries in the same folder as you run the script

