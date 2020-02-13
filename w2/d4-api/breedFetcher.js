const request = require('request');
const args = process.argv.slice(2);
let breed = args[0];
let searchParameters = '?q=';
let url = 'https://api.thecatapi.com/v1/breeds/search';
let searchQuery = url + searchParameters + breed;

request(searchQuery, (error, response, body) => {
  // In order to scan this data like a JavaScript object, we need to convert the string version of it into an object first. As discussed in the JSON Reading earlier, this is called deserialization and we can do this by "parsing" the string.
  let data = JSON.parse(body);
  //print error details if request isnt possible
  if (error) throw error;
  // if the array data holds any information return the breds description, it it doesn't return that it does not exist
  if (data[0]) {
    console.log(`The description for ${breed} is: \n${data[0].description}`);
  } else {
    console.log(`The breed "${breed}" does not exist`);
  }

  
  //returns datatype: should be object now instead of string
  //console.log("\nThe data type for this request is: ",typeof data);
});