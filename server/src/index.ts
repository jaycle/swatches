import express from 'express';
import { rootHandler, colorHandler } from './handlers';
import { dbConfig } from './db/models/index';
import path from 'path';

dbConfig
  .authenticate()
  .then(() => {
      console.log('Connection has been established successfully.');
  })
  .catch(err => {
      console.error('Unable to connect to the database:', err);
  });
const app = express();
app.use(express.static(path.join(__dirname, '../build')))

const port = process.env.PORT || '8000';

app.get('/api/colors', async (req, resp, next) => {
  try {
    await colorHandler(req, resp);
  } catch (e) {
    next(e);
  }
});
app.get('/*', rootHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
