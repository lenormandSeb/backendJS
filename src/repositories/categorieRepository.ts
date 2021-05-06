import { Repository } from './repository'
export class categorieRepository extends Repository {
    constructor(tableName) {
        super(tableName);
    }

    async getAll<Array>() {
        const query = this.queryBuilder();
        const result = this.database.query(query, (err, res) => {
            if (err) console.log(err)
        })

        return result ? result : [];
    }

    async getById<Array>(id: number) {
        const query = this.queryBuilder('id', id);
        const result = this.database.query(query, (err, resultat) => {
            if (err) throw err
        })

        return result[0] ? result && typeof result[0] != undefined : [];
    }
}