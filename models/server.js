const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbConection = require('../database/config');

class server{

    constructor(){
        this.app = express();

        this.port = process.env.PORT

        this.hurtoPath = '/api/hurto'

        this.middleware()

        this.routes()

        this.dbConectar()

    }

    middleware(){
        this.app.use(express.static(__dirname + "public"))

        this.app.use(cors())

        this.app.use(bodyParser.json())

    }

    routes(){
        this.app.use(this.hurtoPath, require('../routes/hurtos'))

    }

    async dbConectar(){
        await dbConection()

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }

}

module.exports = server