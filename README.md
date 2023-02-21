## Used Data
- Clothing Fit Dataset for Size Recommendation: 
  - https://www.kaggle.com/datasets/rmisra/clothing-fit-dataset-for-size-recommendation?select=modcloth_final_data.json

## Programming Language Used
- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]
- [Playwright](https://playwright.dev/docs/intro) for testing
- Material UI [Material-Icons] (https://mui.com/material-ui/material-icons/?theme=Sharp&query=arrow)

## Description
The website is a clothing review that helps users make informed purchasing decisions. The homepage features an interactive gallery of review images. Users can click on the 'x' button to view a larger image and read more details about the clothing item.

On the review page, they can select their body type to see other reviews from users with similar body types.  

## Playwright Test
```
npx playwright test pageName.spec.ts
```
```
npx playwright test pageName.spec.ts --headed
```