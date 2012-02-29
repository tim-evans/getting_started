TodosThree.LOADING_DATA = SC.State.design({
  enterState: function () {
    this.gotoState('SHOWING_APP');
  },

  exitState: function () {}
});
