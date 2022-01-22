const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();

const PORT = 5000;

const db=require('./config');
const route=require('./route');
db.connect();


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));


route(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
