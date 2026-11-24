// sdteqa.vercel.app/pw-locator-demo-app#


// locator : 4) page.getByPlaceholder

/*import {test, expect, Locator} from "@playwright/test"

test(" nevigate to chrome", async({page})=>

    {

 await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app")

  const search :Locator= page.getByPlaceholder("Search tests...")

await expect(search).toBeVisible()

await search.fill("john")
await page.waitForTimeout(10000)


    }
)*/

// 5. getByTitle

import {test, expect, Locator} from "@playwright/test"

test(" nevigate to chrome", async({page})=>

    {

 await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app")

  const search :Locator= page.getByPlaceholder("Search tests...")

await expect(search).toBeVisible()

await search.fill("john")
await page.waitForTimeout(10000)


    }
)