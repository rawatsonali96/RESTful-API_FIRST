var mysql = require('mysql2');
/*var bcrypt   = require('bcrypt-nodejs');
var Schema = mysql.Schema;
// define the schema for our user model
var userSchema = new Schema({

    local            : {
        email        : String,
        password     : String,
    },

});

*/
// methods ======================
// generating a hash
/*userSchema.methods.*/generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
/*userSchema.methods.*/validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
// create the model for users and expose it to our app
/*module.exports = mysql.model('User', userSchema);
*/
//var Model = mysql.Model('user',userSchema);
module.exports = mysql;
/*
var mysql        = require('mysql');

var connection   = mysql.createConnection({

  supportBigNumbers: true,

  bigNumberStrings: true,

  host     : "localhost",

  user     : "root",

  password : "",

  database : "db_users"

});

module.exports = connection;
*/