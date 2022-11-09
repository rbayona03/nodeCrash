const path = require("path");

//base name = only file name
console.log(path.basename(__filename));

//directory name
//provides full directory path
console.log(path.dirname(__filename));

//file extension
//extension type
console.log(path.extname(__filename));

//path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//concat paths
console.log(path.join(__dirname, "test", "hello.htm"));
