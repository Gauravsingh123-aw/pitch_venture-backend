const {Investor}=require('../db.js')

// checking if investor data exists
async function checkInvestorDetail(req,res){
    let body=req.body
    // console.log(body)
    let result=await Investor.find({username:body.data})
    if(result.length!=0){
        res.send({message:"investor found",payload:result})
    }
    else{
        res.send({message:"investor not found"});
    }
}

async function registerInvestor(req,res){
    let body=req.body
    let response=await Investor.create(body)
    res.send({message:"investor registered",payload:response})
}

module.exports={checkInvestorDetail,registerInvestor}