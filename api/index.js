import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js'



const app = express();


mongoose.connect("mongodb://localhost:27017/mern-estate", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("Connected MongoDB")
}).catch(
    console.log("Connection Falied")
)

app.use(express.json())
app.use(cookieParser())

app.listen(3000 , () =>{
    console.log("Server is running on port 3000");
});


app.use('/api/user/',userRouter)
app.use("/api/auth/",authRouter);
app.use('/api/listing/', listingRouter)


app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });
});