import 'express-async-errors'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

//Routes
import authRouter from './routes/authRoutes.js'

//Middlwaress
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js'

const app = express()
const port = process.env.PORT


//Middlewares
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}))

app.use("/api/v1/auth", authRouter)

app.use(errorHandlerMiddleware)

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Application is connected to the database");
        app.listen(port, () => {
            console.log(`Server is Running on port ${port}.....`);
        })
    } catch (error) {
        console.log(error);
    }

}


dbConn()