import Express from "express";
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

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


app.use(cors())





app.get("/", (req, res) => {
    res.status(200).send("Home Page")
})


app.get("/user", (req, res) => {
    res.status(200).send(user)
})







app.listen(PORT, () => console.log(`server started at localhost:${PORT}`))