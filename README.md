# CypressSampleTests
Simple use of Cypress

### Step 1
####  Tested on Node v14.16.1, Chrome 92.0.4515.107, Firefox 89.0.2 
#### Link to newest versions (LTS should work) - there are need of NPM, that is defaulty package manager in Node:
#### https://nodejs.org/en/

#### Simple site that will be tested:
https://juliemr.github.io/protractor-demo/

### Step 2
#### After installing Node, we can use command in the folder where we download repository and localization of the `package.json` file, from command line like:
`npm install`


### Step 3
#### After completed install we can use scripts, that are written in the package.json like:

`npm run cypressOpen` - open Cypress Runner - will not genereate Screenshots, or Videos, after running file
`npm run cypressChromeHeaded` - will run tests in Chrome directly. Will generate video in the `cypress\videos\` folder and if failed screenshot in the `cypress\screenshots` folder
`npm run cypressFirefoxHeaded` - will run tests in Firefox as above
`npm run cypressChrome` - will run tests with Chrome in the headless mode
`npm run cypressFirefox` - same as above, but in the Firefox

### Step 4
#### After run we can generate report with scripts:

`npm run cucumberReport` - will generate report in the folder `cypress\reports\cucumber-report\cucumber-html-report.html` with html file
`npm run cucumberReportMulti` - will generate report with different reporter then above, in the folder `cypress\reports\cucumber-report\cucumber-html-mutliple-report.html\index.html` with `index.html` file

#### There is also example of using adding command for Cypress in the file `cypress\commands.js` it is called `enteringCalculatorValues`