const fs = require('fs');
const path = require('path');

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      // filelist.push(file);
      filelist.push(dir+file);
    }
  });
  // console.log(dir);
  return filelist;
};

listOfFiles = walkSync("./apis/");
// console.log(listOfFiles);
// console.log(listOfFiles.length);
// for(var i = 0; i <= listOfFiles.length-1; i++){
//   console.log(listOfFiles[i]);
// }
// console.log(listOfFiles[0]);
var allFilesPath = function(dirPath, pathList) {
  var fs = fs || require('fs'),
      files2 = fs.readdirSync(dirPath);
  pathList = pathList || [];
  files2.forEach(function(file2) {
    if (fs.statSync(dirPath + file2).isDirectory()) {
      pathList = allFilesPath(dirPath + file2 + '/', pathList);
    }
    else {
      // filelist.push(file);
      pathList.push(dirPath);
    }
  });
  return pathList;
};
listOfPaths = allFilesPath("./apis/");
// console.log(listOfPaths);



module.exports = {listOfFiles, listOfPaths};
