import { test, expect } from '@playwright/test';

test('take screenshot of element', async ({ page }) => {

    await page.goto('/');

    // Force ilw-scroll-to-top to appear.
    await page.mouse.wheel(0, 100);
    await page.waitForTimeout(500);

    const list = await page.locator('.renders > div').all();
    for (let it of list) {
        let tag = await it.evaluate(it => it.dataset["name"]);
        if (!tag) {
            tag = (await it.evaluate(it => it.children[0].tagName)).toLowerCase();
        }
        if (tag === "div") {
            tag = (await it.evaluate(it => it.children[0].children[0].tagName)).toLowerCase();
        }
        console.log(tag);
        await it.screenshot({ path: `site/img/components/${tag}.png` });
    }
});