import { randomUUID } from 'node:crypto'
import { readJSON } from '../../utils.js'

const movies = readJSON('./movies.json')

export class MovieModel{
    static getAll = async ({ genre }) => {
        /* console.log("Movies loaded:", movies); // Depuración */
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        );
        /* console.log("Filtered movies:", filteredMovies); // Depuración */
        return filteredMovies;
    }
    return movies;
}
    static getById = async ({ id }) => {
        const movie = movies.find(movie => movie.id === id)
        return movie
    }

    static create = async ({ input }) => {
        const newMovie = {
            id: randomUUID(), // UUID --> universal unique identifier
            ...input
        }
        movies.push(newMovie)

        return newMovie
    }
    static update = async ({ id, input }) => {
        const movieIndex = movies.findIndex(movie => movie.id === id) 
        if(movieIndex === -1) return false
        
        const updatedMovie = {
            ...movies[movieIndex],
            ...input
        }
        movies[movieIndex] = updatedMovie
        return updatedMovie
    }
    static delete = async ({ id }) => {
        const movieIndex = movies.findIndex(movie => movie.id === id)
        if (movieIndex == -1) return false

        movies.splice(movieIndex, 1)
        return true
    }

}