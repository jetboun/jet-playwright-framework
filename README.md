# jet-playwright-framework
Light test framework written with Playwright, implements Page Object Pattern and use Allure Report

# How to Start
1. Requires Node.js version 12 or later to work. Run 'node -v' from the command line to make sure you have a compatible version of Node.js. If you don't have Node.js, you can download it from [the official website](https://nodejs.org/en/download/)
2. Clone this repository
3. Run `npm install` to install node modules

# How to Run tests
1. Simple run with `npm run test` in 3 browsers (chromium, firefox, webkit) in parallel
2. Run with Allure `npm run test:allure && npm run allure:generate && npm run allure:open` (if the command doesn't work the first time, try running the commands separately)