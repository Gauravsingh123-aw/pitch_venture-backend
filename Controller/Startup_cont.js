async function registerStartup(req,res){
   let body=req.body
   console.log(body)
   res.send(body)
}

module.exports={registerStartup}