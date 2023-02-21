import { test, expect } from '@playwright/test'

  test.describe('Testing for review page on desktop', () => {
    // check desktop device that has form text on the middle
    test('Check body type selection css ', async ({ page }) => {
      await page.goto('http://localhost:3000/review')

      const form = page.locator('form');
      const formCss = await form.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue('justify-content')
    })
    expect(formCss).toBe('center')
    })

    // check desktop device padding
    test('Check margin size of review container', async ({ page }) => {
      await page.goto('http://localhost:3000/review')

    const container = page.locator('#cont');
      const contPadding = await container.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue('padding')
      })
      console.log(contPadding);
      expect(contPadding).toBe("0px");

    })
  })


