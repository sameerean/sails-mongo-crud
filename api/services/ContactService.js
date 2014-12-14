//var Contact = require('../models/Contact.js');

module.exports = {
    
//    findAll: function () {
//        return Contact.find().then(function(contacts) {
//            console.log("ContactService.findAll -- contacts = " + contacts);
//            return contacts;
//        }).catch(function(err) {
//            console.error("Error on ContactService.findAll");
//            console.error(err);
//        });
//    },
    findByPid: function (_pid) {
        return Contact.find().where({pid: _pid}).then(function(contact) {
            return contact;
        }).catch(function(err) {
            console.error("Error on ContactService.findByPid");
            console.error(err);
        });
    },
    createContact: function(options) {
        
        Contact.create({
            pid : options.pid,
            firstName : options.firstName,
            lastName : options.lastName,
            dateOfBirth : options.dateOfBirth,
            email : options.email,
            phone : options.phone,
            profileImageUrl: options.profileImageUrl
        }).then(function(_contact) {
            console.log("Contact created: " + JSON.stringify(_contact));
        }).catch(function(err) {
            console.error("Error on ContactService.createContact");
            console.error(err);
        });
        
        /*
        new Contact({
            pid : options.pid,
            firstName : options.firstName,
            lastName : options.lastName,
            dateOfBirth : options.dateOfBirth,
            email : options.email,
            phone : options.phone,
            profileImageUrl: options.profileImageUrl
        }).save().then(function(_contact) {
            console.log("Contact created: " + _contact);
        }).catch(function(err) {
            console.error("Error on ContactService.createContact");
            console.error(err);
        });
        */

    },
    updateContact: function(_pid, options) {
        Contact.update({pid: _pid}, {
            firstName : options.firstName,
            lastName : options.lastName,
            dateOfBirth : options.dateOfBirth,
            email : options.email,
            phone : options.phone,
            profileImageUrl: options.profileImageUrl
        }).then(function(_contact) {
            console.log("Contact updated: " + _contact);
        }).catch(function(err) {
            console.error("Error on ContactService.updateContact");
            console.error(err);
        });
    },
    removeContact: function(_pid) {
        ContactService.findByPid(_pid).destroy().then(function(_contact) {
            console.log("Contact removed: " + _contact);
        }).catch(function(err) {
            console.error("Error on ContactService.removeContact");
            console.error(err);
        });
    }
};