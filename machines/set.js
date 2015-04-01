module.exports = {


  friendlyName: 'set a new object in the LRU cache',


  description: 'Put a new object in the cache associated with the specified key.',


  extendedDescription: 'Note that if the size of the LRU cache is reached the LRU cache will discard the least recently used object in the cache',


  inputs: {

    key: {
      description: 'The key used to store the obejct in the cache.',
      example: 'id',
      required: true
    },

    value: {
      description: 'The object associated with the key.',
      example: 'some object',
      required: true
    }

  },


  defaultExit: 'success',


  exits: {
    success: {
      friendlyName: 'then',
      description: 'Successfully stored the object to the cache.'
    },
    error: {
      description: 'Unexpected error occurred.'
    }
  },

  fn: function(inputs, exits) {
    
    var SimpleCache = require("simple-lru-cache");
    cache = new SimpleCache({"maxSize":100000});

    cache.set(inputs.key, inputs.value);
    return exits.success();
  }
};