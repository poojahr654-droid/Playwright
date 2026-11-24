
import{test,expect} from "@playwright/test"

test("static web table", async({page})=>
{
    await page.goto("https://sdetqa.vercel.app/autoplay")
    const table=page.locator('table').nth(0)
    const header= table.locator("thead th")
    const bodyrow=table.locator("tbody tr")

    console.log(await header.count())       //coloum count =5
    console.log(await bodyrow.count())      //row count = 4
    await expect(header).toHaveCount(5)
     await expect(bodyrow).toHaveCount(4)

    const firstrowtable= bodyrow.nth(1).locator('td')
     //console.log(await firstrowtable.allTextContents())
      await expect(firstrowtable).toHaveText(['Mouse','Electronics','$29', '50',  'In Stock'])

      //all data from table excluding header

      const datatable : string[][]=[];
        const rowCount=await bodyrow.count()
      for(let i=0;i< rowCount;i++)
            {
        const cellValue = await bodyrow.nth(i).locator('td').allInnerTexts()
              datatable.push(cellValue)
        
        //console.log(cellValue)
            }

       
         console.log(datatable[1])

     // print all product name
     const productName=[]
        for(let i=0;i<datatable.length ;i++)
        {
            productName.push(datatable[i][0])

        }
        console.log(productName)

        //print product name for stock is zero

        const productstock=[]
        for(let i=0;i<datatable.length;i++)
        { 
            if(datatable[i][3]==='0')
            {
                productstock.push(datatable[i][0])
            }

        }
         console.log(productstock)

         //print product name whose having status as instock

         const productInstock=[]
        for(let i=0;i<datatable.length;i++)
        { 
            if(datatable[i][4]==='In Stock')
            {
                productInstock.push(datatable[i][0])
            }

        }
        console.log("print product name whose having status as instock:")
         console.log(productInstock)

          //print product name whose having status as out of stock

           const OutOfstock=[]
        for(let i=0;i<datatable.length;i++)
        { 
            if(datatable[i][4]==='Out of Stock')
            {
                OutOfstock.push(datatable[i][0])
            }

        }
        console.log("print product name whose having status as out of stock:")
         console.log(OutOfstock)

         // print keyboard prise

            let price
        for(let i=0;i<datatable.length;i++)
        { 
            if(datatable[i][0]==='Keyboard')
            {
                price = (datatable[i][2])
            }

        }
        console.log("print keyboard price:")
         console.log( price)
         expect(price).toBe('$79')

         //lowest and height price .............assignment

         let total =0;
         for(let i=0;i<datatable.length;i++)
         {
           total += Number(datatable[i][2].replace('$','')) //for replace $ with empty


         }

         console.log(total)



})

