// Main controller
function main($scope, dispatcher, store) {
  var dispatch = dispatcher.dispatch;

  $scope.todos = store.getState().todos;

  $scope.addTodo = function() {
    dispatch({
      type: 'ADD_TODO',
      data: $scope.newTodo
    });
    $scope.todos = store.getState().todos;
  }
}

angular.module('nrControllers').controller('main', main);