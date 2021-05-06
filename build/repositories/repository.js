"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var db = ('../db');
var Repository = /** @class */ (function () {
    function Repository(tableName) {
        this.database = db;
        this.tablebase = tableName;
    }
    /**
     *
     * @param {string} columnName
     * @param {string | integer} where
     * @param {array} joins
     * @param {array} param
     * @returns {string} sql
     */
    Repository.prototype.queryBuilder = function (columnName, where, joins, param) {
        var sql = "SELECT * FROM " + this.tablebase + " AS " + this.tablebase.substring(0, 3);
        if (joins) {
            sql += " " + joins.join('') + " ";
        }
        sql += " WHERE " + columnName + " = " + where;
        if (param) {
            sql += " " + param.join('');
        }
        return sql;
    };
    return Repository;
}());
exports.Repository = Repository;
