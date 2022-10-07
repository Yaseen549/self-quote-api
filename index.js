const express = require("express");
const app = express();
const {router} = require('./handler');
const path = require('path');
// app.use(cors())
var cors = require('cors');
app.use(express.static('public'));

app.use(express.json({extended:false}));

app.use("/apis/",router);
var corsOptions = {
  // origin: 'https://selfqa-e2.vercel.app/',
  // origin: 'https://localhost:3000/',
  origin: `https://${process.env.VERCEL_URL}` || `https://localhost:3000`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

console.log(`https://${process.env.VERCEL_URL}`);

app.get('/', cors(corsOptions), (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.get("/url",(req, res) => {
  res.send(`https://${process.env.VERCEL_URL}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is runing in port ${PORT}`));

module.exports = app;











