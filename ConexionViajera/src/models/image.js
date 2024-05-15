const mongoose=require('mongoose');
const {Schema}=mongoose;
const path =require('path');
const ReseniaSchema=new Schema({
    place:{ type:String},
    description:{type:String},
    filename:{type:String},
    views:{type:Number,default:0},
    likes:{type:Number,default:0},
    timeStamp:{type:Date,default:Date.now}

   
});
ReseniaSchema.virtual('uniqueId')
.get(function(){
    return this.filename.replace(path.extname(this.filename),'')
})
module.exports=mongoose.model('Image',ReseniaSchema);