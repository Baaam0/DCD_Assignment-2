import { test,devices, expect } from '@playwright/test'

test.use({
  browserName: 'chromium',
...devices ['iPone XR'],
viewport: { width: 414, height: 896 }
})

test.describe('Testing for review page on mobile', () => {
  // check review container's margin that generated by body type selection
  test('Check body type selection css ', async ({ page }) => {
    await page.goto('http://localhost:3000/review')
    const selectElement = page.locator('#review_cont > form > select');
    await selectElement.selectOption({ label: 'hourglass' });

    const container = page.locator('#cont > div:nth-of-type(1)');
    const contCSS = await container.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue('margin')
  })
  expect(contCSS).toBe('5px')
  })
  
  // check first h2 is hidden
  test('Check margin size of review container', async ({ page }) => {
    await page.goto('http://localhost:3000/review')
    await expect(page.locator('#heading > div > h2')).toHaveCSS('display', 'none')
  })
})


 