import { Router } from "express";

const productRoute = Router()

productRoute.get('/', (req, res)=>{
    res.send("HEYYY")
})

productRouteoute.get('/students',(req, res)=>{
    res.json([
        
    ])
})

export default productRoute