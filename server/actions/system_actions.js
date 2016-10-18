const store = require('../store');
const ActionTypes = require('../constants/action_types/syste_action_types.js');

function startGame () {
    store.dispatch({
        type: ActionTypes.START_GAME,
        payload: {
            startTime: Date.now(),
            isGameStarted: true,
        }
    });
}

module.exports = {
    startGame,
};
