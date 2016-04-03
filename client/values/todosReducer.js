function todosReducer(action, state) {
  switch(action.type) {
    case 'ADD_TODO':
      state.todos.push({ text: action.data });
      action.promise.resolve();
      return state;
    default:
      console.log('todosReducer: unknown action from ', action.source);
      return state;
  }
}

angular.module('nrValues').value('todosReducer', todosReducer);