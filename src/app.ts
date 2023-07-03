import * as express from 'express';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as cors from 'cors';

import index from './routes';

const origin = process.env.WEB_ORIGIN;
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin }));

app.use('/', index);

export default app;
