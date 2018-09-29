const massive = require('massive');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening\nport:${PORT}`);
})