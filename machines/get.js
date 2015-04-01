module.exports = {


  friendlyName: 'get the value for a key',


  description: 'Get the value for a key from the LRU Cache',


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
    notFound: {
      friendlyName: 'not found',
      description: 'No object was found in the cache with the specified key.'
    },

    success: {
      friendlyName: 'Done',
      description: 'Successfully fetched requested object from session.',
      example: 'some object'    },

  },


  fn: function (inputs,exits) {
    if ( typeof cache !== 'undefined' && cache) {
          var value = cache.get(inputs.key);
          if (value || value === ''){
            return exits.success(value);
          }
    } else {
        var SimpleCache = require("simple-lru-cache");
        cache = new SimpleCache({"maxSize":100000});
    }

    return exits.notFound();  
  }



};
