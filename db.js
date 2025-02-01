const mongoose=require('mongoose')
require('dotenv').config()

// connecting to db
const DB_URL=process.env.DB_URL
mongoose.connect(DB_URL)
.then(()=>console.log('connection established'))
.catch(err=>console.log(err))

// schema

const userSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:[true,'first_name is required']
    },
    last_name:{
        type:String,
        required:[true,'last_name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
    },
    phone:{
        type:Number,
        required:[true,'phone no is required']
    },
    username:{
        type:String,
        required:[true,'username required']
    },
    password:{
        type:String,
        required:[true,'password required']
    },
    user_type:{
        type:String,
        required:[true,'user type is required']
    }
})

const founderSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    bio:{type:String},
    startups:[{
        startup_id:{type:String},
        stake:{type:String},
        funding_raised:{type:Number}
    }],

})
const startupSchema=mongoose.Schema({
    username:{type:String,required:true},
    startup_id:{
        type:String,
        required:true
    },
    startupName:{
        type:String,
        required:[true,'startup Name is required']
    },
    buisness_desc:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true
    },
    stage: { type: String, enum: ['Idea', 'MVP', 'Growth', 'Scaling'] },
    funding_goal:{type: Number, required: true},
    funding_raised:{type:Number,required:true},
    team_members:[{
        name:{type:String},
        stake:{type:Number},
        role:{type:String},
        img_url:{type:String}
    }],
    equityOffered: { type: Number, required: true },
    
    // to accept payment from investor
    paymentInfo:{
        accoundHolderName:{type:String},
        bankName:{type:String},
        accoundNumber:{type:String},
        routingNumber:{type:String},
        stripId:{type:String}
    },
    investors: [{
        investorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Investor' },
        amountInvested: { type: Number },
        stakePercentage: { type: Number }
      }],
    
    websiteurl:{type:String}

})

const investorSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    investmentRange:{
        min:{type:Number , default:0},
        max:{type:Number}
    },
    investmentExperience: { type: String, enum: ['Beginner', 'Experienced', 'Institutional'] },
    investments: [{
        startupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Startup' }, // Reference to the startup
        amountInvested: { type: Number, required: true }, // Amount invested in that startup
        stakePercentage: { type: Number, required: true } // Equity percentage owned
      }],
    paymentDetails: {
        cardHolderName: { type: String },
        cardNumber: { type: String },  // Consider encryption for sensitive info
        expiryDate: { type: String },
        stripeCustomerId: { type: String }
    }
})

const User=mongoose.model('user',userSchema);
const Founder=mongoose.model('founder',founderSchema);
const Investor=mongoose.model('investor',founderSchema);
const Startup=mongoose.model('startup',startupSchema);

module.exports={User,Founder,Investor,Startup};