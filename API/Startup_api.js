const exp=require('express')
const startupApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')

const {registerStartup}=require('../Controller/Startup_cont.js')
startupApp.post('/register_startup',expressAsyncHandler(registerStartup))

module.exports=startupApp;