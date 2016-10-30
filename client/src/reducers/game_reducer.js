import immutable from 'immutable';

const intitialState = immutable.fromJS({
    isStarted: true,
});

export default function gameReducer(state = intitialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}
