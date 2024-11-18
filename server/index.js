import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from './database/conn.js';
import router from './router/route.js';

const app = express() 

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack


const port = 8100;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});


/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */
app.listen(8000, () => {
    console.log("Server is running")
  })

