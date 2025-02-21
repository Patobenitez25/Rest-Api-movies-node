import mysql from 'mysql2/promise'
// Conexion local
/* const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'moviesdb'
} */

// Conexion Remota
const config = {
    host: 'b2xxayb2i23tqxuuaisi-mysql.services.clever-cloud.com',
    user: 'urhpuvkxhluz17ul',
    port: 3306,
    password: 'jYSOwMBHxVnLgW0erqee',
    database: 'b2xxayb2i23tqxuuaisi'
}

const connection = await mysql.createConnection(config)


export class MovieModel {
    static async getAll ({ genre }) {
            const [movies, tablesInfo] = await connection.query(
                'SELECT BIN_TO_UUID(id) id, title , year, director, duration, poster, rate FROM movie;'
            )
                console.log(movies);
            return movies
    }

    static async getById ({ id }) {
        const [movie, tableInfo] = await connection.query(
            `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id 
                FROM movie WHERE id = UUID_TO_BIN(?);`,
                [id]
                )
                if(movie.length === 0) return null

                return movie[0];
    }

    static async create ({ input }) {
        const {
            title,
            year, 
            director,
            duration,
            poster,
            rate,
        } = input

        const [ uuidResult ] = await connection.query('SELECT UUID() uuid;')
        const [{ uuid }] = uuidResult

        try {
            await connection.query(
                `INSERT INTO movie (id, title, year, director, duration, poster, rate)
                VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
                [title, year, director, duration, poster, rate]
            )

        } catch (error) {
            //no revelar informacion sensible al usuario
            throw new Error('Error creating movie ', error)
        }
        const [movie] = await connection.query(
            `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id 
                FROM movie WHERE id = UUID_TO_BIN(?);`,
                [uuid]
                )
            return movie[0];
    }

    static async delete ({ id }) {
        await connection.query(
            `DELETE FROM movie WHERE id = UUID_TO_BIN(?);`,
            [id]
        )
    }

    static async update ({ id, input }) {
        const {
            title,
            year, 
            director,
            duration,
            poster,
            rate,
        } = input;
        try {
            await connection.query(`
                UPDATE movie
                SET title = ?, year = ?, director = ?, duration = ?, poster = ?, rate = ?
                WHERE id = UUID_TO_BIN(?);`,
                [title, year, director, duration, poster, rate, id]
            )

            const [updatedMovie] = await connection.query(`
                SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id 
                FROM movie 
                WHERE id = UUID_TO_BIN(?);`,
                [id]
            );

            if(updatedMovie.length === 0) return null;

            return updatedMovie
            
        } catch (error) {
            throw new Error('Error updating movie: ' + error.message)
        }

    }
}