const fs = require('fs')
const path = require('path')    
const file = path.join(__dirname, '/data/blogs.json');
const safeJsonStringify = require('safe-json-stringify');

//reads data from json file
function fetch() {
    return new Promise(resolve => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            } 
            resolve(JSON.parse(data));
        })
    })
}

//writes data to json file
function update(blogs) {
    return new Promise(resolve => {
            fs.writeFile(file, safeJsonStringify(blogs), (err) => {
            resolve();
        })
    });
}

module.exports.fetch = fetch;
module.exports.update = update;
