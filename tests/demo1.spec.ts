import { test, expect } from "@playwright/test";

test("Multi select drop down", async ({ page }) => {


await page.goto(
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",)
  //{ waitUntil: "domcontentloaded", timeout: 60000 });


  //await page.goto(
    //"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //);

  // Login
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[name='password']").fill("admin123");
  await page.locator("button[type='submit']").click();

  // Verify PIM link and open it
  const pimLink = page.getByRole("link", { name: "PIM" });
  await expect(pimLink).toBeVisible();
  await pimLink.click();

  // Open Job Title dropdown
  const jobTitleDropdown = page.locator(
    "div.oxd-select-text-input"
  ).nth(2);

  await jobTitleDropdown.click();

  // Locate dropdown options
  const jobTitleValues = page.locator(
    "div.oxd-select-dropdown div.oxd-select-option"
  );

  // Verify and print options
  await expect(jobTitleValues.first()).toBeVisible();

  const jobTitleCount = await jobTitleValues.count();
  console.log("Job Title Count:", jobTitleCount);

  const titles = await jobTitleValues.allTextContents();
  console.log("Job Titles:", titles);
});