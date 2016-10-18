const reselect = require('reselect');

const createSelector = reselect.createSelector;

function system (state) {
    return state.get('system');
}

const startTime = createSelector(
  [system],
  function (systemState) {
      return systemState.get('startTime');
  }
);

const systemSelectors = {
    startTime,
};

module.exports = systemSelectors;
