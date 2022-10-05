const fs = require('fs');
const path = require('path');
const express = require("express");
const quotesPath = express.Router();


// List all files in a directory in Node.js recursively in a synchronous fashion
// var walkSync = function(dir, filelist) {
//   var fs = fs || require('fs'),
//       files = fs.readdirSync(dir);
//   filelist = filelist || [];
//   files.forEach(function(file) {
//     if (fs.statSync(dir + file).isDirectory()) {
//       filelist = walkSync(dir + file + '/', filelist);
//     }
//     else {
//       filelist.push(dir+file);
//     }
//   });
//   return filelist;
// };
// listOfFiles = walkSync("./apis/");
//
// var allFilesPath = function(dirPath, pathList) {
//   var fs = fs || require('fs'),
//       files2 = fs.readdirSync(dirPath);
//   pathList = pathList || [];
//   files2.forEach(function(file2) {
//     if (fs.statSync(dirPath + file2).isDirectory()) {
//       pathList = allFilesPath(dirPath + file2 + '/', pathList);
//     }
//     else {
//       pathList.push(dirPath);
//     }
//   });
//   return pathList;
// };
// listOfPaths = allFilesPath("./apis/");

// const fileName = require(listOfFiles[0])

// quotesPath.get("/",  (req, res) => {
//   try{
//       res.json(fileName);
//   }catch(error){
//     console.error(error);
//     return res.status(500).send("Server error");
//   }
// });


module.exports = {quotesPath};
