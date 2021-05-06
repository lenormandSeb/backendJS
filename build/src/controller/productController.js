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
exports.productController = void 0;
var controller_1 = require("./controller");
var productRepository_1 = require("../repositories/productRepository");
var productController = /** @class */ (function (_super) {
    __extends(productController, _super);
    function productController() {
        var _this = _super.call(this) || this;
        _this.repository = new productRepository_1.ProductRepository;
        return _this;
    }
    productController.prototype.getAll = function (req, res) {
        var result = this.repository.getAll;
        res.end(result);
    };
    productController.prototype.getById = function (req, res) {
        var id = req.query.id;
        var result = this.repository.getById(id);
    };
    return productController;
}(controller_1.Controller));
exports.productController = productController;
