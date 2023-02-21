import { test, devices, expect } from '@playwright/test'

test.use({
  browserName: 'chromium',
...devices ['iPad Air'],
viewport: {width: 820, height: 1180}
})

test.describe('Testing for homepage on tablet', () => {
  // check tablet device has only one image on the home page
  test('On tablet screen, home page should not have two images', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const secondImage = page.locator('#imgBehind');
    const imageCss = await secondImage.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue('display')
    })
    expect(imageCss).toBe('none')
  })

  // check tablet device has a button with right font size
  test('Check font size of button', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const button = page.locator('#buttonText');
    const buttonSize = await button.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue('font-size')
    })
    console.log(buttonSize);

    expect(buttonSize).toBe("30px");
  })
})


 
