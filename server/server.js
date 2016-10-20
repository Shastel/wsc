import express from 'express';
import path from 'path';

import routes from './routes';

import setErrorHandlers from './utils/server_error_handling';

const app = express();

if(app.get('env') === 'development'){
    const logger = require('morgan');
    app.use(logger('dev'));
}

app.use(express.static(path.resolve(process.env.NODE_PATH + 'client/dist/')));

app.use('/', routes);

// catch 404 and forward to error handler
setErrorHandlers(app);

export default app;
