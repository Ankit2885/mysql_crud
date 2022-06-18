var mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '2885',
  database : 'ankit'
});

const connectToSql = ()=>{
    connection.connect((err)=>{
        if(err) throw err;
        console.log('connection successfull')
    })
}
module.exports = {
    connectToSql: connectToSql,
    connection: connection,
};