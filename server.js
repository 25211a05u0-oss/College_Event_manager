// Optional Express backend for extending CampusPulse.
// Run: npm install && npm start
const express=require("express");
const path=require("path");
const app=express();
const PORT=process.env.PORT||3000;
app.use(express.json());
app.use(express.static(path.join(__dirname,"../frontend")));
const events=[
 {id:1,title:"AI & Robotics Summit",category:"technical",date:"2026-10-10",time:"10:00",venue:"Innovation Lab",capacity:120},
 {id:2,title:"Cultural Night 2026",category:"cultural",date:"2026-10-12",time:"18:30",venue:"Main Auditorium",capacity:450}
];
app.get("/api/events",(req,res)=>res.json(events));
app.post("/api/registrations",(req,res)=>res.status(201).json({message:"Registration created",registration:req.body}));
app.get("*",(req,res)=>res.sendFile(path.join(__dirname,"../frontend/index.html")));
app.listen(PORT,()=>console.log(`CampusPulse running at http://localhost:${PORT}`));