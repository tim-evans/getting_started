// ==========================================================================
// Project:   TodosThree
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals TodosThree */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
TodosThree = SC.Application.create(
  /** @scope TodosThree.prototype */ {

  NAMESPACE: 'TodosThree',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.FixturesDataSource.create({
    simulateRemoteResponse: YES,
    latency: 250
  }))

}) ;
