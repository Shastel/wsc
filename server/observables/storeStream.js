const observableFromStore = require('redux-rx').observableFromStore;

let stateStream = null;

module.exports = function (store) {
    if (!stateStream) {
        stateStream = observableFromStore(store);
        stateStream
          .distinctUntilChanged(state => state.getIn(['system', 'isGameStarted']))
          .subscribe(console.log);
    }
};
