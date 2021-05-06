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
exports.ProductRepository = void 0;
var repository_1 = require("./repository");
var ProductRepository = /** @class */ (function (_super) {
    __extends(ProductRepository, _super);
    function ProductRepository() {
        return _super.call(this, 'product') || this;
    }
    ProductRepository.prototype.getAll = function () {
        // DO Something
    };
    ProductRepository.prototype.getById = function (id) {
        // DO Something
    };
    return ProductRepository;
}(repository_1.Repository));
exports.ProductRepository = ProductRepository;
