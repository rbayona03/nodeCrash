const url = require("url");

const myURL = new URL(
  "http://mywebsite.com:8080/hello.html?id=100&status=active"
);

//URL serialized/path
console.log(myURL.href);
//root domain - may include port
console.log(myURL.host);
//host name - no port
console.log(myURL.hostname);
//document path
console.log(myURL.pathname);
//search query
console.log(myURL.search);
//query object
console.log(myURL.searchParams);
//add param - key value args
myURL.searchParams.append("abc", "123");
//param loop
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
