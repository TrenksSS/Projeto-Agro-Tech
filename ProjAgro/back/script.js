const express = require('express');
const cors = require('cors');

const router = require('./route/route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => { console.log("Ta lá...👾👾👾👾👾👾👾👾👾👾"); })