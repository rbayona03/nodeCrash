//fs module enables file manipulation;
const fs = require("fs");
//path module enables directory/file 'path' manipulation
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });

//create/write file
//writeFile overrides all content in file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello there",
//   (err) => {
//     if (err) throw err;
//     console.log("file written");

//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "i have appended",
//       (err) => {
//         if (err) throw err;
//         console.log("file appended");
//       }
//     );
//   }
// );

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "newFile.txt"),
  (err, data) => {
    if (err) throw err;
    console.log("file renamed");
  }
);
