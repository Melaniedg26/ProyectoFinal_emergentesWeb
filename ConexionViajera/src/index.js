const express = require ('express');
const config= require('./server/config')

//database
require('./database');

const app=config(express());


//iniciandoservidor
app.listen(app.get('port'),()=>{
    console.log('servidor en puerto:', app.get('port'));
});
