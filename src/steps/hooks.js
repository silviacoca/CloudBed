let {defineSupportCode, Status} = require('cucumber');

defineSupportCode(({After}) => {
    After(function(scenario, done) {
        var world = this;
        if (scenario.result.status === Status.FAILED) {
            browser.takeScreenshot().then(function (buffer) {                
                let result = world.attach(buffer, 'image/png');
                done();
                return result;
                });
            
        }else {
            done();
        }
    });
  });