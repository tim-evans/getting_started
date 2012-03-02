TodosThree.statechart = SC.Statechart.create({

  rootState: SC.State.design({
    initialSubstate: "STARTING",

    STARTING: SC.State.plugin("TodosThree.STARTING"),

    SHOWING_APP: SC.State.plugin("TodosThree.SHOWING_APP")
  })
});
