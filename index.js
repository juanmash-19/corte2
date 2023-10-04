const express = require("express")
const app = express()
const connect = require("./config/database")
const workroutes = require("./routes/works")
const userroutes = require("./routes/users")

const Start = async () => {
    try {
        await connect()
        console.log ("Conexión exitosa")
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))
        app.use("/api/works", workroutes)
        app.use("/api/users", userroutes)
        app.listen(3000,()=>{console.log("Servidor encendido")})
    } catch (error) {
        console.log ("Servidor no se pudo inicializar")
    }
}


Start();