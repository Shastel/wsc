import immutable from 'immutable';
//stub
import generatePlayers from './generatePlayers';

const intitialState = immutable.fromJS({
    list: generatePlayers(),
});

export default function playersReducer(state = intitialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}
