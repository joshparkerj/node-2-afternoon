const massive = require('massive');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.listen(8080, () => {
  console.log('listening 8080');
})