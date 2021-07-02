import express from 'express';
import { rootHandler, colorHandler } from './handlers';
import { dbConfig } from './db/models/index';

dbConfig
  .authenticate()
  .then(() => {
      console.log('Connection has been established successfully.');
  })
  .catch(err => {
      console.error('Unable to connect to the database:', err);
  });
const app = express();
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/api/colors', async (req, resp, next) => {
  try {
    await colorHandler(req, resp);
  } catch (e) {
    next(e);
  }
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
