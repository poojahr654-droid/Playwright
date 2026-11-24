
import {test , expect,Page} from "@playwright/test"

async function dateSelect(page :Page,year:string,month:string,date:string)
{

}

test("date picker" , async({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    //Approach first
    const date1 = page.locator("input#datepicker1")
    await date1.fill('14/10/26')
    await page.waitForTimeout(5000)

    //  Approach second

     await date1.click()

     const year='2026'
     const month='11'
     const date='17' 

     await datesSelect(year,month,date)


 


})
