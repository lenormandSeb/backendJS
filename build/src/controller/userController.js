"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var controller_1 = require("./controller");
var userRepository_1 = require("../repositories/userRepository");
var User_1 = require("../entities/User");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        var _this = _super.call(this) || this;
        _this.repository = new userRepository_1.UserRepository('user');
        return _this;
    }
    UserController.prototype.logUser = function (req, res) {
        var login = req.body.login;
        var password = req.body.password;
        if (this.checkUser(login, password)) {
            var repo = this.repository.getByUserName(login, password);
            var utilisateur = new User_1.User(repo);
            return utilisateur;
        }
    };
    UserController.prototype.checkUser = function (userName, pass) {
        var result = this.repository.getByNameAndPass(userName, pass);
        return true ? result : false;
    };
    return UserController;
}(controller_1.Controller));
exports.UserController = UserController;
