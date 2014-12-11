/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    default: function (req, res) {
        console.info("default invoked");
        return res.view("homepage", {
            status: 'OK',
            title: "What is this application all about ?"
        });
    },
    cry: function (req, res) {
        console.info("cry invoked");
        return res.json({title: "I am crying....."});
//        return res.view("homepage");
    },
};

