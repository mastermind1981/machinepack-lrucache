module.exports = {


  friendlyName: 'clear the cache',


  description: 'Clear all the objects from the LRUCache',


  extendedDescription: '',


  inputs: {


  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {
      description: 'Done.',
    },

  },


  fn: function (inputs,exits) {
   if ( typeof cache !== 'undefined' && cache) {
         cache.reset();
    } else {
        var SimpleCache = require("simple-lru-cache");
        cache = new SimpleCache({"maxSize":100000});
    }
    return exits.success();
  },



};
