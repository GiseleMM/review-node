import express from "express";


const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hola mundo express 🌼");
});
router.post("/",(req,res)=>{
    res.send("Hola mundo express 🌼 post");
});
router.delete("/",(req,res)=>{
    res.send("Hola mundo express 🌼 delete");
});
router.put("/",(req,res)=>{
    res.send("Hola mundo express 🌼 put");
});
export default router;
