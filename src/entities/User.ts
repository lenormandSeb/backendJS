export class User {
    username
    password
    constructor(User){
        this.username = User.name,
        this.password = User.password
    };

    getName() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }
}