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
        console.log("Inside create..............");
        UserService.createUser({
            userName: req.param("userName"),
            firstName: req.param("firstName"),
            lastName: req.param("lastName"),
            imageUrl: req.param("imageUrl"),
            role: req.param("role")
        });
        
        return res.redirect("user");
    },
    /**
     * `UserController.update()`
     */
    update: function (req, res) {
        console.log("Inside update..............");
        UserService.updateUser({
            userName: req.param("userName"),
            firstName: req.param("firstName"),
            lastName: req.param("lastName"),
            imageUrl: req.param("imageUrl"),
            role: req.param("role")
        });
        return res.redirect("user");
    },
    /**
     * `UserController.delete()`
     */
    delete: function (req, res) {
        console.log("Inside delete..............");
        UserService.removeUser(req.param("userName"));
        
        return res.redirect("user");
    },
    /**
     * `UserController.find()`
     */
    find: function (req, res) {
        console.log("Inside find..............");
        var _userName = req.params.userName;

        var _user = UserService.findByUserName(_userName);
        if (_user === null) {
            return res.view("user/edit", {
                status: 'Error',
                statusDescription: 'No user found with user-name, ' + _userName,
                title: 'User Details'
            });
        }

        return res.view("user/edit", {
            status: 'OK',
            title: 'User Details',
            user: _user
        });
    },
    /**
     * `UserController.findall()`
     */
    findall: function (req, res) {
        console.log("Inside findall..............");
        return res.view("user/list", {
            status: 'OK',
            title: 'List of users',
            users: UserService.findAll()
        });
    },
    /**
     * `UserController.findall()`
     */
    new: function (req, res) {
        console.log("Inside new..............");
        return res.view("user/new", {
            status: 'OK',
            title: 'Add a new user'
        });
    }
};

