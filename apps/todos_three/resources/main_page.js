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
    childViews: 'header newTodoField todosList footer'.w(),
    defaultResponder: 'TodosThree.statechart',

    header: SC.ToolbarView.design({
      layout: { centerX: 0, width: 500, top: 0, height: 36 },

      childViews: 'areAllCompleted'.w(),
      areAllCompleted: SC.CheckboxView.design({
        title: 'Mark all as done',
        valueBinding: 'TodosThree.todosController.areAllCompleted'
      })
    }),

    newTodoField: SC.View.design({
      layout: { centerX: 0, width: 500, top: 36, height: 36 },
      childViews: 'field button'.w(),

      field: SC.TextFieldView.design(),

      button: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, right: 12, width: 70, zIndex: 100 },
        title: 'Add',
        action: 'addTodo',
        valueBinding: '.parentView.field.value',
        isDefaultBinding: SC.Binding.oneWay('.parentView.field.focused')
      })
    }),

    todosList: SC.ListView.design({
      layout: { centerX: 0, width: 500, top: 72, bottom: 36 },
      contentBinding: SC.Binding.oneWay('TodosThree.todosController'),
      exampleView: SC.CheckboxView.design({
        valueBinding: '.content.isCompleted',
        titleBinding: SC.Binding.oneWay('.content.title')
      })
    }),

    footer: SC.ToolbarView.design({
      layout: { centerX: 0, width: 500, bottom: 0, height: 36 },
      childViews: 'clearCompletedTodos'.w(),
      clearCompletedTodos: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, right: 12, width: 150, zIndex: 100 },
        title: 'Clear completed todos',
        action: 'clearCompletedTodos'
      })
    })
  })

});
