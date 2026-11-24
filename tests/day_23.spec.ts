import {test,expect} from "@playwright/test"
test("nevigate to chrome ", async({page})=>
{

await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
const project = page.getByRole('link',{name:'projects'})
await expect(project).toBeVisible();

await page.waitForTimeout(5000)
project.click();
await page.waitForTimeout(5000)




}
)