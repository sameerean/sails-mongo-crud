/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = UserController = {
    usersList: [
        {
            userName: "angeldoll",
            firstName: "Angel",
            lastName: "Doll",
            role: "Admin"
        },
        {
            userName: "battledoom",
            firstName: "Battle",
            lastName: "Doom",
            role: "User"
        },
        {
            userName: "romeo",
            firstName: "Romeo",
            lastName: "Romeo",
            role: "User"
        },
        {
            userName: "geniusgeneral",
            firstName: "Genius",
            lastName: "General",
            role: "User"
        },
        {
            userName: "kunningking",
            firstName: "Kunning",
            lastName: "King",
            role: "User"
        },
    ],
    /**
     * `UserController.create()`
     */
    create: function (req, res) {
        return res.json({
            todo: 'create() is not implemented yet!'
        });
    },
    /**
     * `UserController.update()`
     */
    update: function (req, res) {
        return res.json({
            todo: 'update() is not implemented yet!'
        });
    },
    /**
     * `UserController.delete()`
     */
    delete: function (req, res) {
        return res.json({
            todo: 'delete() is not implemented yet!'
        });
    },
    /**
     * `UserController.find()`
     */
    find: function (req, res) {
        return res.view("user/view", {
            status: 'Error',
            statusDescription: 'Not implemented yet',
            title: 'User Details'
        });
    },
    /**
     * `UserController.findall()`
     */
    findall: function (req, res) {
        console.log("UserController = " + JSON.stringify(UserController));
        console.log("Users = " + JSON.stringify(UserController.userList));
        return res.view("user/list", {
            status: 'OK',
            title: 'List of users',
            users: UserController.usersList
        });
    }
};

