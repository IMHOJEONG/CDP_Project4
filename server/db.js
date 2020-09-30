const mongoose = require('mongoose');

module.exports = () => {
    function connect() {
        mongoose.connect('mongodb://u9xznd7xnutgc3a2rx4s:vO9lQLNyzROW5NZsqdtE@bd3ctawtoexpbor-mongodb.services.clever-cloud.com:27017/bd3ctawtoexpbor',
        {
            useNewUrlParser: true
        }).then(()=> console.log('MongoDB Connected'))
        .catch(err => console.log('MongoDB Connection Error'));
    }
    connect();
    mongoose.connection.on('disconnected', connect);
};  

