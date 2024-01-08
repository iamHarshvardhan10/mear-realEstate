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
        default:"https://www.google.com/search?q=profile+logo&sca_esv=596583007&sxsrf=AM9HkKk4rCy_2FSvTJWIrTd0OG5N0Bxvxw%3A1704730786792&source=hp&ei=oiCcZaP8LfTR2roPt9ieqAc&iflsig=AO6bgOgAAAAAZZwusorST8J6JGH7l3DMo572fpp7pMgC&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggBMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnSN8KUABYAHABeACQAQCYAQCgAQCqAQC4AQPIAQCoAgo&sclient=gws-wiz"
    }
}, {timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;