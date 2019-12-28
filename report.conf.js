var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonDir: './reports/',
        output: './reports/cucumber_report.html',
        screenshotsDirectory: './reports/screenshots/',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);