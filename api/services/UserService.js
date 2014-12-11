module.exports = {
    
    usersList: [
        {
            userName: "angeldoll",
            firstName: "Angel",
            lastName: "Doll",
            imageUrl: "http://webneel.com/daily/sites/default/files/images/daily/03-2013/2-boy-digital-art-by-salvador.jpg",
            role: "Admin"
        },
        {
            userName: "battledoom",
            firstName: "Battle",
            lastName: "Doom",
            imageUrl: "http://webneel.com/daily/sites/default/files/images/daily/03-2013/3-girl-digital-art-by-salvador.jpg",
            role: "User"
        },
        {
            userName: "romeo",
            firstName: "Romeo",
            lastName: "Romeo",
            imageUrl: "http://webneel.com/daily/sites/default/files/images/daily/03-2013/6-comic-digital-illustration-by-salvador.jpg",
            role: "User"
        },
        {
            userName: "geniusgeneral",
            firstName: "Genius",
            lastName: "General",
            imageUrl: "http://webneel.com/daily/sites/default/files/images/daily/03-2013/8-teen-digital-illustration-by-salvador.jpg",
            role: "User"
        },
        {
            userName: "kunningking",
            firstName: "Kunning",
            lastName: "King",
            imageUrl: "http://webneel.com/daily/sites/default/files/images/daily/03-2013/10-tattooed-girl-digital-illustration-by-salvador.jpg",
            role: "User"
        },
    ],
    
    findAll: function (options) {
        return UserService.usersList;
    },
    findByUserName: function (_userName) {
        for(var _idx = 0; _idx < UserService.usersList.length; _idx++) {
            var _current = UserService.usersList[_idx];
            if(_current.userName === _userName) {
                return _current;
            }
        }
        return null;
    },
    createUser: function(options) {
        UserService.usersList.push({
            userName: options.userName,
            firstName: options.firstName,
            lastName: options.lastName,
            imageUrl: options.imageUrl,
            role: options.role
        });
    },
    updateUser: function(options) {
        var _user = UserService.findByUserName(options.userName);
        if(_user && _user !== null) {
            _user.firstName = options.firstName;
            _user.lastName = options.lastName;
            _user.imageUrl = options.imageUrl;
            _user.role = options.role;
        }
    }
};