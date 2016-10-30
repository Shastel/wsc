import immutable from 'immutable';
//stub
import generatePlayers from './generatePlayers';

const intitialState = immutable.fromJS({
    list: generatePlayers(),
});

export default function playersReducer(state = intitialState, action = {}) {
    switch (action.type) {
        case 'RANDOM_PLZ':
            const number = Math.floor(Math.random() * state.get('list').size);
            const task = Math.floor(Math.random() * 5);

            return state.setIn(['list', number, 'progress'], task);
        default:
            return state;
    }
}
