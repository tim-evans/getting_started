// ==========================================================================
// Project:   TodosThree - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals TodosThree */

// This page describes the main user interface for your application.  
TodosThree.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'newTodoField todosList'.w(),
    defaultResponder: 'TodosThree.statechart',

    newTodoField: SC.View.design({
      layout: { centerX: 0, width: 500, top: 0, height: 36 },
      childViews: 'field button'.w(),

      field: SC.TextFieldView.design(),

      button: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, right: 12, width: 70, zIndex: 100 },
        title: 'Add',
        action: 'addTodo',
        valueBinding: '.parentView.field.value'
      })
    }),

    todosList: SC.ListView.design({
      layout: { centerX: 0, width: 500, top: 36, bottom: 0 },
      contentBinding: SC.Binding.oneWay('TodosThree.todosController'),
      exampleView: SC.CheckboxView.design({
        valueBinding: '.content.isCompleted',
        titleBinding: SC.Binding.oneWay('.content.title')
      })
    })
  })

});
