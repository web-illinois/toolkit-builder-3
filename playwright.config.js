// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
    testDir: "./screenshot",
    testMatch: "screenshot/*.test.js",
    outputDir: "screenshot/results",
    fullyParallel: true,
    reporter: "list",
    use: {
        headless: true,
        baseURL: "http://127.0.0.1:8081",
    },

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"], viewport: {width: 1600, height: 500} },
        },
    ],

    webServer: {
        command: "npm run screenshot-server",
        url: "http://127.0.0.1:8081",
    },
});
