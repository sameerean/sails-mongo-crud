/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    pid : { type: 'string' },

    firstName : { type: 'string' },

    lastName : { type: 'string' },

    dateOfBirth : { type: 'datetime' },

    email : { type: 'string' },

    phone : { type: 'string' },
    
    profileImageUrl : { type: 'string' }
  }
};

