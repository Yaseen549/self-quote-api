const {listOfFiles, listOfPaths} = require('./filesPaths');
// const quotes = require('./apis/api.json');
var nameOfFile = listOfFiles[0];
const quotes = require(`${nameOfFile}`);
const express = require("express");
const router = express.Router();
// console.log(typeof(listOfFiles[0]));
// app.use("/",pathsRouter);
// const quotes = require("./apis/"+listOfFiles[0]);
// console.log(quotes);

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
      res.json(quotes);
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
    res.send(reqApi+" URL is Integrated Yet, please use: api/quotes or api/random");
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = {router};
