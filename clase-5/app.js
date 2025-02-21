import express, { json } from "express" // Common JS\
import { corsMiddleware } from './middlewares/cors.js'
import { moviesRouter } from './routes/movies.js'


//Otra forma de leer json en ESmodules
//import movies from './movies.json' assert { type: 'json' }// NO ES VALIDO IMPORTAR JSON DIRECTAMENTE

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') //Deshabilitar el header "X-Powered-By: Express"
app.use('/movies', moviesRouter)
/* app.options('/movies/:id', (req, res) => 
    const origin = req.header('origin')
    if(ACCEPTED_ORIGINS.includes(origin) || !origin){
        res.header('Access-Control-Allow-Origin', origin)
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    }
    res.send(200)
}) */

const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})