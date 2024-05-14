const mongoose=require('mongoose');
require('dotenv').config({ path: './variables.env' });

mongoose.connect(process.env.URL_MONGO)
.then(db=>console.log('Mongo is connected'))
.catch(err=>console.error('Error al conectar mongo',err));