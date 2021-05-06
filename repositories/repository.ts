const db = require('../db')
export class Repository {
    database;
    tablebase: string;
    constructor(tableName) {
        this.database = db
        this.tablebase = tableName
    }

    /**
     * 
     * @param {string} columnName 
     * @param {string | integer} where 
     * @param {array} joins 
     * @param {array} param 
     * @returns {string} sql
     */
    queryBuilder<String>(columnName?: string, where?: (string|number), joins?: [], param?: []) {
        let sql = `SELECT * FROM ${this.tablebase} AS ` + this.tablebase.substring(0, 3);

        if (joins.length != 0) {
            sql += ` ` + joins.join('') + ` `;
        }

        sql += ` WHERE ${columnName} = ${where}`;

        if(param.length != 0) {
            sql += ` ` + param.join('');
        }

        return sql;
    }
}
