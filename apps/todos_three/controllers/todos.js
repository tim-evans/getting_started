sc_require('controllers/completed_todos');

TodosThree.todosController = SC.ArrayController.create({

  completedTodosBinding: SC.Binding.oneWay('TodosThree.completedTodosController.length'),

  areAllCompleted: function (k, v) {
    if (v !== undefined) {
      this.setEach('isCompleted', v);
    }
    return this.get('length') === this.get('completedTodos');
  }.property('length', 'completedTodos').cacheable()
});
