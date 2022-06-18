const express = require('express');
const app = express();
const port = process.env.PORT || 8055;
const { connectToSql, connection } = require('./db')
var cors = require('cors')

app.use(cors())
app.use(express.json())

connectToSql();

app.get('/', (req,res) => {
  const query = `select * from ankit.user`
  connection.query(query,(err,result) => {
    if (err) throw err;
    console.log('inserted succesfully')
    res.send(result)
  })
})


app.post('/createuser', (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const mobile = req.body.mobile;

  console.log(req.body);
  const query = `insert into ankit.user (name,email,password,mobile) values ('${name}','${email}','${password}','${mobile}')`
  connection.query(query, (err) => {
    if (err) throw err;
    console.log('inserted succesfully')
  })

});



app.listen(port, () => {
  console.log(`index app listening on port ${port}`)
});