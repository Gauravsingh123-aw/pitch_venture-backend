const exp=require('express')
const app=exp()
require('dotenv').config()

//application level middleware
app.use(exp.json())

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
