const exp=require('express')
const app=exp()
const cors=require('cors')
require('dotenv').config()

// enable cors for all routes
app.use(cors());

//application level middleware
app.use(exp.json())

app.get('/users',(req,res)=>{
    let data=req.body
    res.send({payload:data,message:"request successful"})
})
//Error handling middleware
app.use((err,req,res,next)=>{
    res.send({error:err,payload:"error occured"});
})

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
