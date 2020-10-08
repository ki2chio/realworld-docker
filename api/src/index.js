const express = require("express")
const app = express()
// const port = process.env.PORT
// const host = process.env.HOST

const {port, host} = require('./configuration')

function startServer(){
    app.listen(port, () => {
        console.log(`api is working on port ${port}`)
        console.log(`hostis ${host}`)
    })
}

app.get("/test", (req, res) =>{
    res.send("all OK")
})


connectDB()
    .on('error', console.error.bind(console ,'connection error:'))
    .on('disconnected' connectDB)
    .once("open", startServer)