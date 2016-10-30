import immutable from 'immutable';
//stub
import generatePlayers from './generatePlayers';

const intitialState = immutable.fromJS({
    players: generatePlayers(),
});

export default function gameReducer(state = intitialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}
