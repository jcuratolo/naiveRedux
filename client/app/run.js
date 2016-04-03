function run(reducers, todosReducer) {
  reducers.add('todosReducer', todosReducer);
}

angular.module('naiveRedux').run(run);