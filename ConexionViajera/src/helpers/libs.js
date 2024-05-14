const helpers={};

helpers.randomNumber=()=>{
    const possible='abcdefghijklmnopqrstuvwxyz1234567890';
    let randomC=0;
    for(let i=0;i<6;i++){
       randomC+=possible.charAt(Math.floor(Math.random()*possible.length)) 
    }
    return randomC;
};
module.exports=helpers;