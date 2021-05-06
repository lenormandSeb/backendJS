import connexion = require('../../db')
export class Repository {
    database;
    tablebase: string;
    constructor(tableName) {
        this.database = connexion
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
    queryBuilder<String>(columnName?: string, where?: (string|number), joins?: [], param?: string[]) {
        let sql = `SELECT * FROM ${this.tablebase} AS ` + this.tablebase.substring(0, 3);

        if (joins) {
            sql += ` ` + joins.join('') + ` `;
        }

        if (where) {
            sql += ` WHERE ${columnName} = ${where}`;
        }

        if(param) {
            sql += ` ` + param.join('');
        }

        return sql;
    }
}
