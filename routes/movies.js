import { Router } from "express";
import { MovieController } from "../controllers/movies.js";
import { MovieModel } from "../models/mysql/movie.js";

export const moviesRouter = Router()
const movieController = new MovieController({ movieModel: MovieModel})

moviesRouter.get('/', movieController.getAll)
moviesRouter.get('/:id', movieController.getById)
moviesRouter.post('/', movieController.create)
moviesRouter.patch('/:id', movieController.update)
moviesRouter.delete('/:id', movieController.delete)