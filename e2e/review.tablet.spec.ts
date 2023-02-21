import { test, devices, expect } from '@playwright/test'

test.use({
  browserName: 'chromium',
...devices ['iPad Air'],
viewport: {width: 820, height: 1180}
})

test.describe('Testing for review page on tablet', () => {
  // check tablet device has different font color for the form
  test('Check body type selection css ', async ({ page }) => {
    await page.goto('http://localhost:3000/review')

    const form = page.locator('form');
    const formCss = await form.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue('color')
    })
    expect(formCss).toBe('rgb(0, 0, 0)')
  })

  // check tablet device has different font size for the title
  test('Check margin size of review container', async ({ page }) => {
    await page.goto('http://localhost:3000/review')

    const title = page.locator('h1');
    const titleSize = await title.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue('font-size')
    } )
    console.log(titleSize);
    expect(titleSize).toBe("40px");
  })
})


 
