import { Repository } from './repository'

export class UserRepository extends Repository {
    constructor(tableName) {
        super(tableName);
    }

    async getByUserName(userName: string) {
        const sql = this.queryBuilder("name", userName);
        const result = this.database.query(sql, (err, resultat) => {
            if (err) throw err
        })

        return result[0] ? result && typeof result[0] != undefined : []
    }

    async getByNameAndPass(userName : string, pass: string) {
        const sql = this.queryBuilder(
            "name", 
            userName,
            null,
            ['&& password = ' + pass]
        );

        const result = this.database.query(sql, (err, resultat) => {
            if (err) throw err
        })

        return result ? result && typeof result[0] != undefined : []
    }
}