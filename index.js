require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:8000'
}));

const testRouter = require('./routes/test');
app.use('/test', testRouter);

const registerRouter = require('./routes/register');
app.use('/register', registerRouter);

app.listen(PORT, () => console.log("Server is up on localhost:8000"));
