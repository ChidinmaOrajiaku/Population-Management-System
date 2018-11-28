/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './server/routes/index';

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get('/*', (req, res) => res.status(200).send({
  message: 'Welcome to the population management app',
}));

app.all('*', (req, res) => {
  res.status(400).send({
    message: 'Action cannot be executed',
  });
});

export default app;
