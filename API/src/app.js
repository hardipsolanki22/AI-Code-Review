import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: process.env.NODE_ENV === "development" ? "http://localhost:5173" : ""
}))

// middlewares declared
app.use(express.json())

app.get("/", (req, res) => {
    res.send("AI is Here")
})

// routes declared
import aiRoutes from './routes/ai.routes.js'

app.use("/api/v1/ai", aiRoutes)

export { app }