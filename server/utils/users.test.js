const expect = require('expect');

const {Users} = require('./users');

describe("Users", () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Cource'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Cource'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Cource'
        }];
    });

    it("Should remove a user", () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it("Should not remove a user", () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist(userId);
        expect(users.users.length).toBe(3);
    });

    it("Should find the user", () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it("Should not find a user", () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist(userId);
    });

    it('Should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The office fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it("Should return names for node cource", () => {
        var userList = users.getUserList('Node Cource');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it("Should return names for react cource", () => {
        var userList = users.getUserList('React Cource');

        expect(userList).toEqual(['Jen']);
    });

});
