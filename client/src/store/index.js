import { createStore, applyMiddleware } from 'redux';

import reducers from 'reducers';

const store = applyMiddleware()(createStore)(reducers);

export default store;
