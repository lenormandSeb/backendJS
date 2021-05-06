import { Repository } from './repository'
export class categorieRepository extends Repository {
    constructor(tableName) {
        super(tableName);
    }

    async getAll<Array>() {
        const query = super.queryBuilder('id', 1);
        console.log(query)
        const result = super.database.query(query, (err, res) => {
            if (err) throw err
        })

        return result ? result : [];
    }

    async getById<Array>(id: number) {
        const query = super.queryBuilder('id', id);
        const result = super.database.query(query, (err, resultat) => {
            if (err) throw err
        })

        return result[0] ? result && typeof result[0] != undefined : [];
    }
}