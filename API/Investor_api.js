const exp=require('express')
const investorApp=exp.Router()
const  expressasynchandler=require('express-async-handler')
const {checkInvestorDetail,registerInvestor}=require('../Controller/Investor_cont.js')

investorApp.post('/check_investor',expressasynchandler(checkInvestorDetail))

investorApp.post('/register_investor',expressasynchandler(registerInvestor))

module.exports=investorApp;