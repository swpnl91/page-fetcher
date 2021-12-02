const arr = process.argv.slice(2);  // to take inputs from user that saves each element as a string in an array

//console.log(arr);    // checking if above line works

const request = require('request');  // to make an http request and receive data

const fs = require('fs'); // to write the received data to a specified file in local system

request(arr[0], (error, response, body) => { // arr[0] is the resource 

  if (!error) {
    fs.writeFile(arr[1], body, (err) => { // arr[1] is the local path
      if (!err) {
        console.log(`Downloaded and saved ${body.length} bytes to ${arr[1]}`);
      }
    });
  } 

  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
}); 


/////// Remember to gitignore the node_modules folder before committing