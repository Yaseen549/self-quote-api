const quotes = require('./api/api.json');
const express = require("express");
const router = express.Router();


const randomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

router.get("/",  (req, res) => {
  try{
    // res.send("Page build under progress");
    res.render('home')
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});
router.get("/api/",  (req, res) => {
  try{
    res.write("Please use /api/<data>");
    res.send();
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});
router.get("/api/quotes",  (req, res) => {
  try{
    res.json(quotes);
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});
router.get("/api/random",  (req, res) => {
  try{
    res.json(randomQuote());
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});
router.get("/api/:api", async (req, res) => {
  const reqApi = req.params.api;
  try{
    res.send("No Custom APIs Integrated Yet, use: api/quotes or api/random");
  }catch(error){
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = {router};
