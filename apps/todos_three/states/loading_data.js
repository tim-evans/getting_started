TodosThree.LOADING_DATA = SC.State.design({
  enterState: function () {
    TodosThree.todosController.set('content',
      TodosThree.store.find(SC.Query.local(TodosThree.Todo, { orderBy: 'timestamp DESC' })));

    TodosThree.completedTodosController.set('content',
      TodosThree.store.find(SC.Query.local(TodosThree.Todo, 'isCompleted = YES')));

    this.gotoState('SHOWING_APP');
  },

  exitState: function () {}
});
