
//syntax for writing script

/*import {test , expect} from "@playwright/test"
test(" 1st argument is test case name",()=>
 {

      //stmt1
      //stmt2


    }
)*/


import {test , expect} from "playwright/test"

test(" nevigate to chrome", async({page})=>

{

await page.goto("https://www.google.com/")

//await expect(page).toHaveTitle(" ")

await expect(page).toHaveTitle("Google")




}

)
