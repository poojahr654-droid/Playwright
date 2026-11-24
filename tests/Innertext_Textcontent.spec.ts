import{test,expect} from "@playwright/test"

test("static web table", async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/")
    const allproduct = page.locator(".product-title")
    //console.log(await allproduct.nth(1).innerText())
   const text = await allproduct.nth(1).textContent()
    if(text!==null && text!==undefined)
    {
        console.log(text?.trim())
    }



})


