import express, { Application, Request, Response } from "express"
import cors from "cors"
import studentRouter from "./router/studentRouter"
import feeRouter from "./router/feeRouter"
// import bagRouter from "./router/bagRouters"

export const mainApp = (app:Application)=>{
    app.use(express())
    app.use(cors())
    app.use("api/v1",studentRouter)
    app.use("api/v1",feeRouter)
    // app.use("api/v1", bagRouter)
    
    app.use("api/v1",studentRouter)

    app.get("/",(req:Request,res:Response)=>{
        try {
            return res.status(404).json({
                message:"api is live......"
              })     
        } catch (error) {
          return res.status(404).json({
            message:`error api:${error}`
          })  
        }
    })
}