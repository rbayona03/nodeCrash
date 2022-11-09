// console.log("hello");

// const person = require("./person");

// console.log(person);

// class newPerson {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greeting() {
//     console.log(`hello ${this.name} `);
//   }
// }

// const person1 = new newPerson("rob", 30);
// person1.greeting();
/////////////////////////////

// const Logger = require("./logger");

// const logger = new Logger();

// logger.on("message", (data) => console.log("call listener:", data));

// logger.log("hello world");
//////////////////////////////////////

//core mode module
const http = require("http"); //create new server
const path = require("path");
const fs = require("fs");

//Server
const server = http.createServer((req, res) => {
  //Create Server with params of request and response

  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" }); //very strict
  //       res.end(content);
  //     }
  //   );
  // }

  //Dynamic File Path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Extension to File
  let extName = path.extname(filePath);

  //content type
  let contentType = "text/html";

  //Check ext and set content
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;

    case ".css":
      contentType = "text/css";
      break;

    case ".json":
      contentType = "application/json";
      break;

    case ".png":
      contentType = "image/png";
      break;

    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //enoent === PAGE NOT FOUND
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" }); //very strict
            res.end(content, "utf8");
          }
        );
      } else {
        //server err
        res.writeHead(500); //very strict
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      //Successful response/ page found
      res.writeHead(200, { "Content-Type": contentType }); //very strict
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000; //returns use environment || run on 5000 if N/a
server.listen(PORT, () => console.log(`Server up ${PORT}`));
