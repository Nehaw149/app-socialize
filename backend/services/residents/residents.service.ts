// @todo: Return application json as an response

// services/residents.ts
import express = require('express');
import residents = require('./residents.mock');
const cors = require('cors');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// Create a new express application instance
const app: express.Application = express();
const port = 3000;

app.get('/', cors(corsOptions), (req, res) => {
  // let resi = residents;
  res.type('application/json');
  res.send(residents);
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
