const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

exports.setupConnection = function() {
    console.log('HELLO', process.env.DB_URI);
    
  mongoose.connect(process.env.DB_URI, 
                   { 
                    useMongoClient: true, 
                    /* other options */
                   }, 
                   (error) => 
                   {
                      if (error) console.error("Unable to connect to the mongoDB server. Error: " + error);
                   }
  );
};


