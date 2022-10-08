const express = require("express");
const app = express();
const {router} = require('./handler');
const path = require('path');
// app.use(cors())
var cors = require('cors');
app.use(express.static('public'));

app.use(express.json({extended:false}));

app.use("/apis/",router);
// var corsOptions = {
//   // origin: 'https://selfqa-e2.vercel.app/',
//   // origin: 'https://localhost:3000/',
//   origin: `https://${process.env.VERCEL_URL}` || `https://localhost:3000`,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use(cors({
  origin: 'https://selfqa-e2.vercel.app/'
}));
app.use((req, res, next) => {
  const allowedOrigins = ['https://selfqa-e2.vercel.app', 'https://selfqa-e2.vercel.app/apis/quotes', 'https://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  return next();
});

// console.log(corsOptions);

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.get("/vercel_url",(req, res) => {
  res.send(`https://${process.env.VERCEL_URL}`);
});

app.get("/urlfetch",(req, res) => {
  res.send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is runing in port ${PORT}`));

module.exports = app;











