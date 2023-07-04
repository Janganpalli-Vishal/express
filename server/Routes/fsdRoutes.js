import { Router } from "express";
 let resData = [
    {
        name:"vishal",
        batch:"19"
    },
    {
        name:"krishna",
        batch:"19"
    } 
]


const route = Router()

route.get('/', (req, res)=>{
    res.send("HEYYY")
})

route.get('/students',(req, res)=>{
    res.json(resData)
})

route.post('/students',(req,res)=>{
    resData.push(req.body)
    res.json(resData     )
})





export default route