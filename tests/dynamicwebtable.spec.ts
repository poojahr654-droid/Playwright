import {test,expect} from "@playwright/test" 
/*
test("test case :1 internet explorer cpu usases validation",async({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    const tableRow=await page.locator('#taskTable tbody tr').all() //4 matches findout
    expect(tableRow.length).toBeGreaterThan(0)

      let cpuload;
    for (const row of tableRow)
    {
       const productName=await  row.locator('td').nth(0).innerText()
       
    //    if(productName ==='Internet Explorer')
    //    {
    //        cpuload=await row.locator('td',{hasText: '%'}).innerText()

    //    }
    //    console.log(cpuload)


     if(productName ==='Chrome')
       {
        cpuload=await row.locator('td',{hasText: '%'}).innerText()
        const expectedcpuload=await page.locator('strong.chrome-cpu').innerText()
        expect(cpuload).toBe(expectedcpuload)

      }

    }

     console.log(cpuload)
})*/



test("test case :2 system memory usase validation", async({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    const tableRow=await page.locator('#taskTable tbody tr').all() //4 matches findout
    expect(tableRow.length).toBeGreaterThan(0)


        let memory;
    for (const row of tableRow)
    {
       const productName=await  row.locator('td').nth(0).innerText()
       
       if(productName ==='System')
       {
           memory=await row.locator('td',{hasText:/MB$/}).innerText() //........../ani $ cha meaning asa hoto ki ya nantr kontah text available nahi
        //    const expectedmemory=await page.locator('strong.chrome-cpu').innerText()
        // expect( memory).toBe(expectedmemory)
       }
       console.log(memory)
    }



})

