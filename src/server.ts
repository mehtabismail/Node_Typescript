import express, { Request, Response } from 'express';
const logger = require('./middleware/logger');

const app = express();

const {
  PORT = 3000,
} = process.env;

// ROUTE FILES
const bootcamps = require('.//routes/bootcamps');

app.use(logger);

// MOUNT ROUTERS
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, (): void => {
  console.log('server started at http://localhost:'+PORT);

});