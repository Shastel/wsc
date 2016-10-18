const combineReducers = require('redux-immutable').combineReducers;

//importing of reducers
const game_reducer = require('./game_reducer');
const system_reducer = require('./system_reducer');

module.exports = combineReducers({
    game: game_reducer,
    system: system_reducer,
});
