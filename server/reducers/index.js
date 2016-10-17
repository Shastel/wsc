const combineReducers = require('redux-immutable').combineReducers;

//importing of reducers
const game_reducer = require('./game_reducer');

module.exports = combineReducers({
    game: game_reducer,
});
