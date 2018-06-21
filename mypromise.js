exports.getUsers = function () {
    var promise;
    promise = new Promise();
    connection.connect(function () {
        connection.query('SELECT * FROM Users', function (err, result) {
            if(!err){
                promise.resolve(result);
            } else {
                promise.reject(err);
            }
        });
    });
    return promise.promise();
};

//when API doesn't putput promises in itself
/*
var pool = mysql.createPool({
  connectionLimit : process.env.mysql_connection_pool_Limit, // default:10
  host     : process.env.mysql_host,
  user     : process.env.mysql_user,
  password : process.env.mysql_password,
  database : process.env.mysql_database
})


// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.')
    }
}

if (connection) connection.release()

 return
 })

// Promisify for Node.js async/await.
 pool.query = util.promisify(pool.query)



 module.exports = pool
 */