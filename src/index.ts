import app from './app';
import debug from 'debug';
import * as http from 'http';

const log = debug('todolist:index');

export default app.listen(process.env.PORT, () => {
  log(`App listening on port ${process.env.PORT}!`);
});
