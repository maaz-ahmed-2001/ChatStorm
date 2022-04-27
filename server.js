import Express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import express from "express";
import router from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";


dotenv.config()

const PORT = process.env.PORT
const mongoDbURI = process.env.MongoDB_URI
const app = Express();
const user = { name: "maaz", email: "maaz@abc.com" }

mongoose.connect(mongoDbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
    console.log('=================== Database connected to ChatApp ===================');
})


app.use(express.json())





app.get("/", (req, res) => {
    res.status(200).send("Home Page")
})


app.use("/api/user", router)

app.use(notFound)
app.use(errorHandler)







app.listen(PORT, () => console.log(`server started at localhost:${PORT}`))