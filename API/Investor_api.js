const exp=require('express')
const investorApp=exp.Router()
const  expressasynchandler=require('express-async-handler')
const {checkInvestorDetail}=require('../Controller/Investor_cont.js')
investorApp.post('/check_investor',expressasynchandler(checkInvestorDetail))

module.exports=investorApp;