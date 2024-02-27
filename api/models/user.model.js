import mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        unique:true
    },
    email : {
        type: String,
        required: true,
        unique:true
    },
    password : {
        type: String,
        required: true,
    },
    avatar:{
        type:String,
        default:"https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
    }
}, {timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;