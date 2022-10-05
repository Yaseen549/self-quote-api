const express = require("express");
const app = express();
const {router} = require('./handler');
const path = require('path');

app.use(express.static('public'));

app.use(express.json({extended:false}));

app.use("/api/",router);

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is runing in port ${PORT}`));

module.exports = app;











