function dispatcher(store, reducers, $q) {
  function dispatch(action, source) {
    var currentState = store.getState();
    action.promise = action.promise = $q.defer();
    action.source = source || 'unknown source';
    var nextState = reducers.run(action, currentState);
    store.setState(nextState);

    return action.promise;
  }

  this.dispatch = dispatch;
}

angular.module('nrServices').service('dispatcher', dispatcher);