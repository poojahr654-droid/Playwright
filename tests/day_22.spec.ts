import {test, expect } from "@playwright/test"
test ("navigate to chrome",async({page})=>
{

await page.goto("https://www.google.com")

await expect(page).toHaveTitle("Google")
//await expect(page).toHaveTitle("")


})