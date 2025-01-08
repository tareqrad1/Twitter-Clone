import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet'
import connectingDB from './config/database.config.js';
import authRoute from './routes/auth.route.js';
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}))
app.use(helmet());

////////// go to github and push this 

app.use('/api/auth', authRoute);
app.use('*', (_, res) => {
    res.status(404).json({ error: 'Route Not found !' });
});

// started server & database
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectingDB();
});
