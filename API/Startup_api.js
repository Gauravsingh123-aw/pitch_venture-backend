const exp=require('express')
const startupApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')

const {registerStartup,getStartupData}=require('../Controller/Startup_cont.js')
startupApp.post('/register_startup',expressAsyncHandler(registerStartup))

//getting startup data
startupApp.post('/get_startupdata',expressAsyncHandler(getStartupData));

module.exports=startupApp;