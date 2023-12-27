import express from 'express';
import mongooese from 'mongoose';



const app = express();


mongooese.connect("mongodb://localhost:27017/mern-estate", {
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

