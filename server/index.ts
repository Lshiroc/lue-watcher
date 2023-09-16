require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT: number = 8000;

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:8000'
}));

const testRouter = require('./routes/test');
app.use('/test', testRouter);

app.listen(PORT, () => console.log("Server is up on localhost:8000"));
