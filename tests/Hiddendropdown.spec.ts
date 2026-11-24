
import {test ,expect} from "@playwright/test"

test("Multi select drop down",async ({page})=>
    {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

          // Enter username

        await page.locator("input[name='username']").fill("Admin")


//enter password

await page.locator("input[name='password']").fill("admin123")

    
   // click on login button

 await page.locator("button[type='submit']").click()


await expect(page.getByRole('link',{name:'PIM'})).toBeVisible();
                         
await  page.getByRole('link',{name:'PIM'}).click()
                           
const jobTitledropdown= page.locator("div[class='oxd-select-text-input']").nth(2)
                           
await jobTitledropdown.click();
                        
                           //to check whather values present inside dropdown

const jobTitleValues= page.locator("div[role='listbox'] span")
 await expect(jobTitleValues.first()).toBeVisible();

 const jobTitleCount=await jobTitleValues.count()  
console.log("JobTitleCount", jobTitleCount)

 const  text = await jobTitleValues.allTextContents()
console.log(text)

 for(let i=0; i<jobTitleCount;i++)
                               {
                                 const jobTitle = jobTitleValues.nth(i)
                                 const text1 = await jobTitle.textContent()
                                 console.log(text1)
                               

                               if(text1== 'Automaton Tester')
                               {
                                 await jobTitle.click()
                                 break;

                               }
                              }
                          
                          
    }) 
      