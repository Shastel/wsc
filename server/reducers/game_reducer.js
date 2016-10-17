const Immutable = require('Immutable');

const inntitialState = Immutable.fromJS({
    players: {},
});

module.exports = function gameReducer(state = inntitialState, action = {}) {
    switch (action.type) {
    case 'wow':
        throw new Error();
    default:
        return state;
    }
};
