import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import debug from 'debug';
// import api from './routes/index';

const app = express();
const log = debug('todolist:app');

if (dotenv.config().error) {
  throw new Error('Dot Env não está configurado!');
}

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

app.use(methodOverride('X­HTTP­Method'));
app.use(methodOverride('X­HTTP­Method­Override'));
app.use(methodOverride('X­Method­Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      res.end('');
    } else {
      next();
    }
  },
);

// app.use('/api', api);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const err = new Error('Page Not Found');
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(404);
    next(err);
  },
);

app.use((err: Error, req: express.Request, res: express.Response) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  log('Err => ', err);
  res.json({ err });
});

export default app;
