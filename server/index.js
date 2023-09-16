import dotenv from "dotenv";
import cors from 'cors';
import express from 'express';
import testRouter from "./routes/test.js";
dotenv.config();
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use('/test', testRouter);
app.listen(PORT, () => console.log("Server is up on localhost:8000"));
