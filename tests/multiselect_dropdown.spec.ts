
// Day_multiselect dropdown and sorted array

import {test ,expect} from "@playwright/test"


test("Multi select drop down",async ({page})=>

    {

await page.goto("https://sdetqa.vercel.app/autoplay")

     const multiselectdropdown=page.locator("#colors")

     await expect(multiselectdropdown).toBeVisible()
     await expect(multiselectdropdown).toHaveValue("blue")


     //select multiple dropdown by label

     //await multiselectdropdown.selectOption([{label:'Red'},{label:'Blue'},{label:'Yellow'}])

//await page.waitForTimeout(5000)

           //select multiple dropdown by value

        //    await multiselectdropdown.selectOption([{value:'red'},{value:'blue'},{value:'green'}])

        //   await expect(multiselectdropdown).toHaveValues(['red','blue','green']);
        //   await page.waitForTimeout(5000)

          //select multiple dropdown by index

         await  multiselectdropdown.selectOption([{index:0},{index:1},{index:3}])

         await page.waitForTimeout(10000)

          

    }


)
          //sorted dropdown

         test("sorted dropdown", async ({page})=>

            {
                    await page.goto("https://sdetqa.vercel.app/autoplay")
  
                  const sortedOption = page.locator("#sorted option")

                 const sortedText= await sortedOption.allTextContents()

                              console.log(sortedText)

                         const originalsorted =sortedText
                         const duplicatesorted  =[...sortedText].sort()   
                         console.log(sortedText)
                         console.log(sortedText)

                         expect(originalsorted).toEqual(duplicatesorted)

            }
        
        )