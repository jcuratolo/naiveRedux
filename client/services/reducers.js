function reducers() {
  var reducers = {};
  this.add = addReducer;
  this.run = runReducers;

  function addReducer(name, reducer) {
    if (typeof name !== 'string') {
      throw new Error('Expected name to be a string')
    }

    if (typeof reducer !== 'function') {
      throw new Error('Expected reducer to be a function');
    }

    reducers[name] = reducer;
    return reducer;
  }

  function runReducers(action, state) {
    Object.keys(reducers).forEach(function(reducer) {
      var currentReducer = reducers[reducer];
      currentReducer(action, state);
    });

    return state;
  }
}

angular.module('nrServices').service('reducers', reducers);