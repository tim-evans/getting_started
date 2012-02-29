TodosThree.statechart = SC.Statechart.create({

  rootState: SC.State.design({
    initialSubstate: "STARTING",

    STARTING: SC.State.plugin("TodosThree.STARTING"),

    LOADING_DATA: SC.State.plugin("TodosThree.LOADING_DATA"),

    SHOWING_APP: SC.State.plugin("TodosThree.SHOWING_APP")
  })
});
