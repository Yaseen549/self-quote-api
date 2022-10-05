// const {listOfFiles, listOfPaths} = require('./filesPaths');
// const quotes = require('./apis/api.json');
const express = require("express");
const router = express.Router();

// const quotes = require(listOfFiles[0]);
// console.log(quotes);

// for(let i=0; i<=listOfFiles.length-1;i++){
//   console.log(listOfFiles[i]);
// }
// console.log(listOfFiles);
var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(dir+file);
    }
  });
  return filelist;
};
listOfFiles = walkSync("./apis/");

var allFilesPath = function(dirPath, pathList) {
  var fs = fs || require('fs'),
      files2 = fs.readdirSync(dirPath);
  pathList = pathList || [];
  files2.forEach(function(file2) {
    if (fs.statSync(dirPath + file2).isDirectory()) {
      pathList = allFilesPath(dirPath + file2 + '/', pathList);
    }
    else {
      pathList.push(dirPath);
    }
  });
  return pathList;
};
listOfPaths = allFilesPath("./apis/");

// ========================================

const quotes = require(listOfFiles[0]);

const randomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

router.get("/",  (req, res) => {
  try{
    res.write("Please use /api/<data>");
    res.send();
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});
router.get("/quotes",  (req, res) => {
  try{
      res.json(require(listOfFiles[0]));
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});
router.get("/random",  (req, res) => {
  try{
    res.json(randomQuote());
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});
router.get("/:api", async (req, res) => {
  const reqApi = req.params.api;
  try{
    res.send("No Custom URLs Integrated Yet, use: api/quotes or api/random");
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = {router};
