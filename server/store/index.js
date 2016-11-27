import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'server/reducers';
import middlewares from './middlewares';
import a from 'server/sagas/saveStoreSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = applyMiddleware(sagaMiddleware, ...middlewares)(createStore)(rootReducer);

sagaMiddleware.run(a);

export default store;
