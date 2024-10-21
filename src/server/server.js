import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';   //ES6 moderno

const __filename = fileURLToPath(import.meta.url); //ES6 moderno
const __dirname = path.dirname(__filename); //ES6 moderno

export const startServer = (options) =>{
    const {port, public_path = 'public'} = options
    
    const app = express()
    
    app.use(express.static(public_path))

    app.get('*', (req,res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`)
    })
}

// Las lineas señaladas "ES6 moderno" fueron agregadas para que __dirname de la linea 16 funcione 
// debido a que las versiones más recientes de Node.js están optimizadas para trabajar con ES Modules
// y han ajustado ciertas características para que se ajusten mejor a las especificaciones de ECMAScript.
// esto es un esfuerzo de Node.js por alinear más estrechamente su comportamiento con los estándares de JavaScript
// Esto se relaciona al uso de "type": "module" en package.json y en el remplazo de require('') por import para trabajar 
// todos los .js como modulos.