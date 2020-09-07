import app from './app';
import debug from 'debug';

const log = debug('todolist:index');

app.listen(process.env.PORT, () => {
  log(`App listening on port ${process.env.PORT}!`);
});
