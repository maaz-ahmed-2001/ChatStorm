import Express from "express";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const user = {name:"maaz",email:"maaz@abc.com"}
const PORT = process.env.PORT
const app = Express();

app.use(cors())
app.get("/user",(req,res)=>{
    console.log("ok")
    res.status(200).send("Data from backend")
})


app.listen(PORT,() => console.log(`server started at localhost:${PORT}`) )