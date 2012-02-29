TodosThree.LOADING_DATA = SC.State.design({
  enterState: function () {
    TodosThree.todosController.set('content',
      TodosThree.store.find(SC.Query.local(TodosThree.Todo)));

    this.gotoState('SHOWING_APP');
  },

  exitState: function () {}
});
