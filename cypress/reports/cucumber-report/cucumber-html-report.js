const reporter = require('cucumber-html-reporter');
var options = {
    theme:'bootstrap',
    jsonDir:'./cypress/reports/cucumber-json/',
    output:'./cypress/reports/cucumber-report/cucumber-html-report.html',
    reportSuiteAsScenario:true,
    scenarioTimestamp:true,
    launchReport:true,
    metadata:{
        "App Version":"Super Calculator",
        "Test Environment":"STAGING",
        "Browser":"Different",
        "Platform":"Windows 10",
        "Parallel":"Scenarios",
        "Executed":"Remote"
    }
}

reporter.generate(options);