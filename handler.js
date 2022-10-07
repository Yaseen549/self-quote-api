const {listOfFiles, listOfPaths} = require('./filesPaths');
// const quotes = require('./apis/api.json');
const express = require("express");
const router = express.Router();

const quotes = require(`./${listOfFiles[0]}`);
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
  console.log(`${process.env.VERCEL_URL}`);
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
router.get("/:country/:state/:city", async (req, res) => {
  const country = req.params.country;
  const state = req.params.state;
  const city = req.params.city;

  try{
    // res.send(reqApi+" URL is not integrated Yet, please use: api/quotes or api/random");
    // res.json(`./apis/${country}/${state}/${city}.json`)
    const userFiles = require(`./apis/${country}/${state}/${city}.json`);
    // console.log(userFiles);
    res.json(userFiles)
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});
router.get("/:api", async (req, res) => {
  const reqApi = req.params.api;
  try{
    res.send(reqApi+" URL is not integrated Yet, please use: api/quotes or api/random");
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = {router};
