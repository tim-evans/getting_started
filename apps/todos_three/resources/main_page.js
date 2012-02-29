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
    childViews: 'todosList'.w(),
    
    todosList: SC.ListView.design({
      layout: { centerX: 0, width: 500, top: 0, bottom: 0 },
      contentBinding: SC.Binding.oneWay('TodosThree.todosController')
    })
  })

});
