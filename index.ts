import express,{Application} from "express"
import { mainApp } from "./mainApp"
import { DataBase } from "./config/DB"
const port: number = 2000
const app:Application = express()
mainApp(app)
const server = app.listen(port,()=>{
    console.log("")
    DataBase();
    console.log(`server is listening to port: ${port}`)
})

process.on("uncaughtException",(err:any)=>{
    console.log("server is shutting down due to uncaughtException")
    console.log("uncaughtException", err)
    
    process.exit(1);
})
process.on("handleRejection",(reason:any)=>{
    console.log("server is shutting down due to handleRejection")
    console.log("handleRejection", reason)
    
    server.close(()=>{
    process.exit(1);

    })
})