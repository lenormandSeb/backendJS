"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(User) {
        this.username = User.name,
            this.password = User.password;
    }
    ;
    User.prototype.getName = function () {
        return this.username;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
exports.User = User;
