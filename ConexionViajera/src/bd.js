const mongoose = require('mongoose');

const{ bd } = require('./keys');

mongoose.connect(bd.URI, {
    userNewUrlParse: true,
    useUnifiedTopology: true
})

.then(db => console.log('La BD esta conectada'))
.catch(err => console.error(err));