//a) launchBrowser need to take input as browserName (string) and do not return any
function launchBrowser(browserName) {
    if(browserName === 'Safari'){
        return "Safari Browser";
    } else if (browserName === 'Opera'){
        return "Opera Browser";
    } else if (browserName === 'Chromium'){
        return "Chromium Browser";
    } else if (browserName === 'Firefox'){
        return "Firefox Browser";
    }
    
}

let browserName = 'Chromium';

console.log(launchBrowser(browserName));
// b) runTests need to take input as testType (string) and do not return any
function runTests (){
    switch (testType) {
        case 'smoke':
            return "smoke testing";

        case 'sanity':
            return "sanity testing";

        case 'regression':
            return "regression testing";
    
        default:
            return "exploratory testing";
    }

}

let testType = "smoke";

console.log(runTests(testType));
