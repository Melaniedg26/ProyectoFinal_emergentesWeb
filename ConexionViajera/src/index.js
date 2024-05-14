const express = require ('express');
const config= require('./server/config')

require('./bd');
const app=config(express());


app.listen(app.get('port'),()=>{
    console.log('servidor en puerto:', app.get('port'));
});
