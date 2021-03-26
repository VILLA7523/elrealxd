const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-task';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false    
})
    .then(db => console.log('DB is conected'))
    .catch(err => console.log(err));

module.exports = mongoose;