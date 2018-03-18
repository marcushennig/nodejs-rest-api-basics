import fs = require('fs');

function loadJSONSync(filename: string) : any {
    let str: string = fs.readFileSync(filename).toString();
    return JSON.parse(str);
}

// A decent initial attempt .... but not correct. We explain the reasons below
function loadJSON(filename: string,
                  cb: (error: Error, data: any) => void) {

    fs.readFile(filename,
        (error, data) => {
        if (error) {

            cb(error, null);

        } else {

            // Contain all your sync code in a try catch
            let parsed: string = undefined;
            try {
                parsed = JSON.parse(data.toString());
            }
            catch (err) {
                return cb(err, null);
            }
            // except when you call the callback
            return cb(null, parsed);
        }
    });
}

loadJSON('invalid.json', function (err, data) {
    // This code never executes
    if (err) console.log('bad.json error', err.message);
    else console.log(data);
});

// good json file
/*console.log(loadJSONSync('./resources/good.json'));

// non-existent file, so fs.readFileSync fails
try {
    console.log(loadJSONSync('absent.json'));
}
catch (err) {
    console.log('absent.json error', err.message);
}

// invalid json file i.e. the file exists but contains invalid JSON so JSON.parse fails
try {
    console.log(loadJSONSync('invalid.json'));
}
catch (err) {
    console.log('invalid.json error', err.message);
}*/