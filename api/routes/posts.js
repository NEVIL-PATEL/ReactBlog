import express from 'express'

const router = express.Router();

router.get("/",(req,res)=>{
    res.json("it works")
})

export default router;