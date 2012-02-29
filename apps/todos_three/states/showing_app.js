TodosThree.SHOWING_APP = SC.State.design({
  enterState: function () {
    TodosThree.getPath('mainPage.mainPane').append();
  },

  exitState: function () {}
});
