const express=require('express');
const mongoose = require('mongoose');
const app=express();
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/post')
const CommentRoute=require('./routes/comments')
// DATABASE
const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database is connected successfully!")
    } catch (error) {
        console.log(error)
    }
}
//MIDDLEWARES
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",CommentRoute)
app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running on port "+process.env.PORT)
})