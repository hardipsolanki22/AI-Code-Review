import { app } from "./app.js";
import dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT, () => {
    console.log("App is Running on PORT", process.env.PORT || 6000)

}) 
