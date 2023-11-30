import express from "express";
import cors from 'cors';
import api from "./src/routes/api/index.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', api);

const port = 9000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});