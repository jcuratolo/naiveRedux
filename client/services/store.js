function store(initialState) {
  var currentState = initialState || {};
  var prevStates = [];
  this.setState = function setState(nextState) {
    var stateCopy = angular.copy(currentState);
    prevStates.push(stateCopy);
    currentState = nextState || currentState;
  };

  this.getState = function getState() {
    return angular.copy(currentState);
  };
}

angular.module('nrServices').service('store', store);