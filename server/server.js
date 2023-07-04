import  Express  from "express"
import cors from 'cors'
import route from "./Routes/fsdRoutes.js"

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(route)

app.listen(5000,()=>{
    console.log('Server is running on port: ',5000)
})