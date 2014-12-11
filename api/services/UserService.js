module.exports = {
    
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
    
    findAll: function (options) {
        return UserService.usersList;
    }
};