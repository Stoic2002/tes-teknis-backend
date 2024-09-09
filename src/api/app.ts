import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import {setupCsrf} from '../middlewares/csrfMiddleware'

const app = express();

app.use(cookieParser());

// setupCsrf(app);

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH','DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'], 
    credentials: true
}));

app.use('/v1/file', express.static(path.join('src', 'file')));

app.use(express.json()).use(routes);

export default app;