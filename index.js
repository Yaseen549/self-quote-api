const express = require("express");
var cors = require('cors');
const app = express();
const {router} = require('./handler');
const path = require('path');
// app.use(cors())
app.use(express.static('public'));

app.use(express.json({extended:false}));

app.use("/apis/",router);
var corsOptions = {
  // origin: 'https://selfqa-e2.vercel.app/',
  // origin: 'https://localhost:3000/',
  origin: `${process.env.VERCEL_URL}` || `https://localhost:3000`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', cors(corsOptions), (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is runing in port ${PORT}`));

module.exports = app;











