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
exports.categorieController = void 0;
var controller_1 = require("./controller");
var categorieRepository_1 = require("../repositories/categorieRepository");
var categorieController = /** @class */ (function (_super) {
    __extends(categorieController, _super);
    function categorieController() {
        var _this = _super.call(this) || this;
        _this.repository = new categorieRepository_1.categorieRepository('categorie');
        return _this;
    }
    categorieController.prototype.getAll = function (req, res) {
        var result = this.repository.getAll();
        console.log(result);
    };
    return categorieController;
}(controller_1.Controller));
exports.categorieController = categorieController;
