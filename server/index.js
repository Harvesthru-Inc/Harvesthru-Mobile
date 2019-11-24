const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

const mongoose = require('mongoose');

// Mongo Atlas custom URL to mongoose connection
const DATABASE_URL = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE_URL, {
    dbName: 'authentication',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(err => console.error('Something went wrong', err));

app.get('/', (req, res) => {
  res.send("Connected!")
});

app.listen(9000, () => {
  console.log('Server listening on Port 9000!');
});
