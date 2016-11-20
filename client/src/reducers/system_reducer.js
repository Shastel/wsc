import SharedActionTypes from 'shared/action_types/baseViewActionTypes';
import immutable from 'immutable';

const intitialState = immutable.fromJS({
    isGameStarted: false,
    start: null,
    end: null,
});

export default function systemReducer(state = intitialState, action = {}) {
    switch (action.type) {
        case SharedActionTypes.FETCH_STORE:
            const system = action.payload.system;

            return state.withMutations((mutable) => {
                //todo: use not object date
               mutable.set('start', new Date(system.startTime));
               mutable.set('end', new Date(system.startTime + (2*60*60*1000)));
               mutable.set('isGameStarted', system.isGameStarted);
               //... players
            });

        case SharedActionTypes.START_GAME:
            return state.withMutations((mutable) => {
                //todo: use not object date
                mutable.set('start', new Date(action.payload.startTime));
                mutable.set('end', new Date(action.payload.startTime + (2*60*60*1000)));
                mutable.set('isGameStarted', action.payload.isGameStarted);
            });
        default:
            return state;
    }
}
