const request = require('request');
const fs = require('fs');
const arguments = process.argv.slice(2);
const url = arguments[0];
const localFilePath = arguments[1];


request(url, (err, response, body) => {
  if (err) {
    console.log('url is invalid');
  } else {
    fs.writeFile(localFilePath, body, function(err){
      if (err) {
        console.log('localFilePath is invalid');
      } else {
        console.log(`Downloaded and saved ${response.headers['content-length']} to ${localFilePath}.`)
      }

    })
  }
})

