/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = UserController = {
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
        return res.view("user/list", {
            status: 'OK',
            title: 'List of users',
            users: UserService.findAll()
        });
    }
};

