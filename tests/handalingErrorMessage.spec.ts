import {test,expect} from "@playwright/test"



const url = "https://sdetqa.vercel.app/autoplay"

test.beforeEach(async ({page})=>
{
    await page.goto(url)
})


test("Test 1 to validate URL", async ({page})=>
{

const name = page.getByLabel("Full name")
const email = page.getByLabel("Email")
const phone = page.getByLabel('Phone')
const address = page.getByLabel('Address')
const button = page.getByRole('button', { name: 'Submit' }).nth(0)
const errorMessage = page.locator('#formErrors')

await name.fill('')
await email.fill('')
await phone.fill('')
await address.fill('')



await button.click()

await expect(errorMessage).toBeVisible()
await expect(errorMessage).toContainText('Please fix the following:')

await page.waitForTimeout(5000)
})



test("Validate the input box for maxlength character", async ({page})=>
{

const name = page.getByLabel("Full name")
const button = page.getByRole('button', { name: 'Submit' }).nth(0)
const errorMessage = page.locator('#formErrors')


await name.fill('ABCDEFGHIJKLMNOPQRSTUVWXYZ12343')
await expect(name).toHaveValue('ABCDEFGHIJKLMNO')
await expect(name).toHaveValue(/.{15}/)

await page.waitForTimeout(5000)

})



test.only("Validate the email box", async ({page})=>
{

const email = page.getByLabel("Email")
const button = page.getByRole('button', { name: 'Submit' }).nth(0)
const errorMessage = page.locator('#formErrors')


await email.fill("test@") // invalid email address
await button.click()
await expect(errorMessage).toBeVisible();

await expect(errorMessage).toContainText('Please enter a valid email address.');


})