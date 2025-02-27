import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}.`);
});
