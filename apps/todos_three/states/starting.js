TodosThree.STARTING = SC.State.extend({

  enterState: function () {
    this.gotoState('LOADING_DATA');
  },

  exitState: function () {
    // Nothing to worry about here
  }
});
