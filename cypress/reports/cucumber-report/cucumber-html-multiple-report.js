const report = require ('multiple-cucumber-html-reporter');
report.generate({
jsonDir:"./cypress/reports/cucumber-json",
reportPath:"./cypress/reports/cucumber-report/cucumber-html-multiple-report.html",
metadata:{
    browser:{
        name:"different",
        version:"newest"
    },
    device:"Local test machine",
    platform:{
        name:"Windows 10",
        version:"newest"
    }
}


})