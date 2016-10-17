const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reducer = require('./reducers');

const createLogger = require('redux-logger');

const logger = createLogger();

//const store = createStore(reducer, inntitialState, applyMiddleware(createLogger));

const store = applyMiddleware(logger)(createStore)(reducer);

module.exports = store;
