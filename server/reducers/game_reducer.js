const Immutable = require('Immutable');

const inntitialState = Immutable.fromJS({
    players: {},
});

module.exports = function gameReducer(state = inntitialState, action = {}) {
    switch (action.type) {

    default:
        return state;
    }
};
