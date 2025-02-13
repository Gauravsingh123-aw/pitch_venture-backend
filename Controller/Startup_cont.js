const {Startup,User}=require('../db.js')

// register startup
async function registerStartup(req,res){
   let body=req.body.formData
   let search=await Startup.find({startup_id:body.startup_id})
   if(search.length===0){
    // let searchUser=await User.find({username:body.username});
    // if(searchUser.length!=0){
        let ans=await Startup.create(body);
        res.status(201).send({message:"startup listed",payload:ans})
    // }
    // else{
        // res.send({message:"username does not exist"})
    // }
   }
   else{
    res.send({message:"startup id exists"});
   }
}

// get startup data
async function getStartupData(req,res){
    let body=req.body
    let ans=await Startup.find({username:body.data})
    if(ans.length!=0){
        res.status(201).send({payload:ans,message:"startup data found"});
    }
    else
    res.send({message:"startup detail not found"});
}

module.exports={registerStartup,getStartupData}