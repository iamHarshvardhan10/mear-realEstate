import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/user.route.js';

const app = express();


mongoose.connect("mongodb://localhost:27017/mern-estate", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("Connected MongoDB")
}).catch(
    console.log("Connection Falied")
)

app.listen(3000 , () =>{
    console.log("Server is running on port 3000");
});


app.use('/api/user/',userRouter)