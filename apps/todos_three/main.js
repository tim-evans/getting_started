// ==========================================================================
// Project:   TodosThree
// Copyright: @2012 My Company, Inc.
// ==========================================================================

function main() {
  var statechart = TodosThree.statechart;
  SC.RootResponder.responder.set('defaultResponder', statechart); 
  statechart.initStatechart();
}
