// ==========================================================================
// Project:   TodosThree - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals TodosThree */

// This page describes the main user interface for your application.  
TodosThree.mainPage = SC.Page.design({
  field: SC.outlet('mainPane.newTodoField.field'),

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'header newTodoField todosList footer'.w(),
    defaultResponder: 'TodosThree.statechart',

    header: SC.ToolbarView.design({
      layout: { centerX: 0, width: 500, top: 0, height: 36 },

      childViews: 'title areAllCompleted'.w(),
      areAllCompleted: SC.CheckboxView.design(SC.AutoResize, {
        autoResizePadding: { width: 47 },
        title: 'Mark all as done',
        valueBinding: 'TodosThree.todosController.areAllCompleted'
      }),

      title: SC.LabelView.design({
        totalTodosBinding: SC.Binding.oneWay('TodosThree.todosController.length'),
        completedTodosBinding: SC.Binding.oneWay('TodosThree.completedTodosController.length'),
        textAlign: SC.ALIGN_RIGHT,

        value: function () {
          return 'TodosThree (' + (this.get('totalTodos') - this.get('completedTodos')) + ')';
        }.property('totalTodos', 'completedTodos').cacheable()
      })
    }),

    newTodoField: SC.View.design({
      layout: { centerX: 0, width: 500, top: 36, height: 36 },
      childViews: 'field button'.w(),

      field: SC.TextFieldView.design({
        hint: 'What needs to be done?'
      }),

      button: SC.ButtonView.design(SC.AutoResize, {
        controlSize: SC.HUGE_CONTROL_SIZE,
        layout: { centerY: 0, height: 30, right: 12, zIndex: 100 },
        title: 'Add',
        action: 'addTodo',
        valueBinding: '.page.field.value',
        isDefaultBinding: SC.Binding.oneWay('.page.field.focused')
      })
    }),

    todosList: SC.ScrollView.design({
      layout: { centerX: 0, width: 500, top: 72, bottom: 36 },
      contentView: SC.ListView.design({
        contentBinding: SC.Binding.oneWay('TodosThree.todosController'),
        rowHeight: 36,
        exampleView: SC.CheckboxView.design({
          classNames: ['todo-item'],
          valueBinding: '.content.isCompleted',
          titleBinding: SC.Binding.oneWay('.content.title')
        })
      })
    }),

    footer: SC.ToolbarView.design({
      layout: { centerX: 0, width: 500, bottom: 0, height: 36 },
      childViews: 'clearCompletedTodos'.w(),
      clearCompletedTodos: SC.ButtonView.design(SC.AutoResize, {
        controlSize: SC.HUGE_CONTROL_SIZE,
        layout: { centerY: 0, height: 30, right: 12, zIndex: 100 },
        isEnabledBinding: SC.Binding.oneWay('TodosThree.completedTodosController.length').bool(),
        title: 'Clear completed todos',
        action: 'clearCompletedTodos'
      })
    })
  })

});
