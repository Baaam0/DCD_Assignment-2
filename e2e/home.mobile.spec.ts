import { test, devices, expect } from '@playwright/test'

  test.use({
    browserName: 'chromium',
  ...devices ['iPone XR'],
  viewport: { width: 414, height: 896 }
  })

  test.describe('Testing for homepage on mobile', () => {
    // check mobile device image has right padding
    test('On tablet screen, home page should not have two images', async ({ page }) => {
      await page.goto('http://localhost:3000/')

      const main = page.locator('#main');
      const padding = await main.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue('padding')
      })
      expect(padding).toBe('30px 20px')
    })
  })
    
    // heading elements should be aligned flex-end
    test('Check font size of button', async ({ page }) => {
      await page.goto('http://localhost:3000/')

      const heading = page.locator('#main > div:nth-of-type(1)');
      const headingAlign = await heading.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue('align-items')
      })
      console.log(headingAlign);

      expect(headingAlign).toBe("flex-end");

    })


 
