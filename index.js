// const os = require("os");
// const https = require("HTTPS");
const fs = require("fs");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "new",
});

connection.connect();

connection.query(
  "insert into salary_sheet value(22)",
  function (err, results, fields) {
    if (err) {
      throw err;
    }

    console.log(results);
    console.log(fields);
  }
);

connection.end();
// const currentPath = "./new";
// const newPath = "./database";
// con.end();
// fs.unlink("./database", function () {
//   fs.rmdirSync("./database");
// });
// try {
// fs.unlink(newPath, function () {
//   if (error) console.log(error);
//   else {
//     fs.rmdirSync("database");
//     console.log("suceed");
//   }
// });
// } catch (error) {}
// try {
//   fs.rmSync(newPath, { recursive: true });
//   console.log("deleted");
// } catch (error) {
//   console.log(error);
// }

// fs.renameSync(currentPath, newPath, function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("suceed");
//   }
// });

// try {
//   fs.renameSync(currentPath, newPath);
//   console.log("renamed");
// } catch (error) {
//   console.log(error);
// }

// const dir = "./database";
// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir, {
//     recursive: false,
//   });
//   console.log("Sucessfully Make");
// } else console.log("already exits");
// fs.mkdirSync("./noman/no/ka", { recursive: true });
// const https = require("https");
// const fs = require("fs");

// const options = {
//   key: fs.readFileSync("myText.txt"),
//   cert: fs.readFileSync("myText.txt"),
// };

// https
//   .createServer(options, (req, res) => {
//     res.writeHead(200);
//     res.end("hello world\n");
//   })
//   .listen(8000);

// let https

// try {
//      https = require("https")
// } catch (error) {
//      console.log(error);
// }
// console.log(https);

// console.log(os.constants.errno);
// console.log(os.constants.signals);

// mili second to minutes
// const intoMinutes = function (getMiliSec) {
//   let sec = 60000;
//   minute = getMiliSec / sec;
//   return minute;
// };
// console.log(intoMinutes(os.uptime()));
// console.log(os.uptime());

// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.networkInterfaces());
// console.log(os.loadavg());
// console.log(os.type());
// console.log(gbs);
// function intoGbs(x) {
//   const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
//   let l = 0,
//     n = parseInt(x, 10) || 0;
//   while (n >= 1024 && ++l) {
//     n = n / 1024;
//   }
//   return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
// }
// console.log(intoGbs(os.totalmem()));
