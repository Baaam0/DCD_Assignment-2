import { test, expect } from '@playwright/test'

  test.describe('Home Page', () => {
    // check desktop device has two images
    test('should have two images on the homepage', async ({ page }) => {
      await page.goto('http://localhost:3000/')

      const secondImage = page.locator('.imgBehind');
      expect(secondImage).toBeTruthy()
    })

    // check hover effect on button
    test('Check font size of button', async ({ page }) => {
      await page.goto('http://localhost:3000/')

      const button = page.locator('#button');
      const buttonColor = await button.evaluate((ele) => {
        return window.getComputedStyle(ele);
      })
      await button.hover();
      const buttonColorHover = await button.evaluate((ele) => {
        return window.getComputedStyle(ele);
      })  

      expect(buttonColor.backgroundColor).toBe("rgb(255, 255, 255)");
      expect(buttonColorHover.backgroundColor).toBe("rgba(0, 0, 0, 0.9)");

    })
  })


 
