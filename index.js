const massive = require('massive');
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const controller = require('./products_controller');
//const testExport = require('./test-export');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db',db);
  })
  .catch(err => {
    console.log(err);
  })

app.get('/api/products', controller.getAll);
app.get('/api/products/:id',controller.getOne);
app.put('/api/products/:id',controller.update);
app.post('/api/products',controller.create);
app.delete('/api/products/:id',controller.delete);

app.listen(PORT, () => {
  console.log(`listening\nport:${PORT}`);
})
