const exp=require('express')
const app=exp()
const cors=require('cors')
require('dotenv').config()

// enable cors for all routes
app.use(cors());

//application level middleware
app.use(exp.json())

const userApp=require('./API/User_api.js')
const founderApp=require('./API/Founder_api.js')
const investorApp=require('./API/Investor_api.js')
const startupApp=require('./API/Startup_api.js')

app.use('/user-api',userApp);
app.use('/founder-api',founderApp);
app.use('/investor-api',investorApp);
app.use('/startup-api',startupApp);


//Error handling middleware
app.use((err,req,res,next)=>{
    res.status(400).send({error:err.message,payload:"error occured"});
})

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
