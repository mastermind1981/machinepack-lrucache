module.exports = {


  friendlyName: 'remove an object from the cache',


  description: 'Remove the object associated with the specified key from the cache',


  extendedDescription: '',


  inputs: {
    key: {
      description: 'The key used to store the obejct in the cache.',
      example: 'id',
      required: true
    }

  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {      
      friendlyName: 'then',
      description: 'Done.'
    },

  },


  fn: function (inputs,exits) {
    if ( typeof cache !== 'undefined' && cache) {
         cache.del(inputs.key);
    } else {
        var SimpleCache = require("simple-lru-cache");
        cache = new SimpleCache({"maxSize":100000});
    }
    return exits.success();
  },



};
