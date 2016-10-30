import { combineReducers } from 'redux-immutable';

import players from './players_reducer';

export default combineReducers({
    players,
});
