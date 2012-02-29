TodosTwo.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    TodosTwo.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    TodosTwo.getPath('mainPage.mainPane').remove();
  },

  // Prove that we are rolling!
  proveIt: function (someParam) {
    alert(someParam);
  }

});

