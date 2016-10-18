const Immutable = require('Immutable');

const ActionTypes = require('../constants/action_types/syste_action_types.js');

const inntitialState = Immutable.fromJS({
    startTime: null,
    isGameStarted: false,
});

module.exports = function gameReducer(state = inntitialState, action = {}) {
    switch (action.type) {
    case ActionTypes.START_GAME:
        return state.merge(action.payload);
    default:
        return state;
    }
};
