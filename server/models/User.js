const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        require:true,
        max:50,
        unique:true
    },
    gender:{
        type:String
    },
    password:{
        type:String,
        require:true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    userStatus:{
        type:String,
        default:"active"
    },
    reports:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          review: String,
        },
    ],
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },

    
    traderType:{
        type:Array,
        default:[]
    },
    type:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    description:{
        type:String,
        max:550
    },
    city:{
        type:String,
        max:150
    },
    county:{
        type:String,
        max:150
    },
    rating:{
        type:Number
    },
    review: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          review: String,
        },
    ],
    verified:{
        type:Boolean,
        default:false
    },
    slug:{
        type:String,
        require:true,
        unique:true
    }
},
{timestamps:true }
);

module.exports= mongoose.model('User',UserSchema)