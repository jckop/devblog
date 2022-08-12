let connect = function() {
    const { url } = require("../data/Secrets/secret.json");

    const  mongoose = require('mongoose');


    mongoose.Promise = global.Promise;


    // Connect MongoDB.

    mongoose.connect(url, {
        useNewUrlParser: true
    }, (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    });
    }

export default connect;