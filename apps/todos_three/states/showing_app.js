TodosThree.SHOWING_APP = SC.State.design({
  enterState: function () {
    TodosThree.getPath('mainPage.mainPane').append();
  },

  exitState: function () {},

  addTodo: function (view) {
    TodosThree.store.createRecord(TodosThree.Todo, {
      title: view.get('value'),
      timestamp: SC.DateTime.create()
    });
  }
});
