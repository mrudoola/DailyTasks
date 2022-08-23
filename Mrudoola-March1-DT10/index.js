const express = require('express');
const app = express() //app is object of type express
app.use(express.json());
const employees = [
    {
        "id": 1,
        "first_name": "Sebastian",
        "last_name": "Kenny",
        "email": "sk@gmail.com"
      },
    {
        "id": 2,
        "first_name": "Steve",
        "last_name": "John",
        "email": "js@gmail.com"
      },
      {
        "id": 3,
        "first_name": "Ann",
        "last_name": "Smith",
        "email": "as@gmail.com"
      }
]

//define a route
app.get('/',(req,res) => { //app has methods - get,post,put,delete. (req,res) is a callback function.
    res.send("hello world!!")
});

app.get('/employees',(req,res)=>{
    res.send(employees);
});

app.post('/employees',(req,res)=>{
    const emp = {
        id:employees.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email
    };
    employees.push(emp);
    res.send(emp);
});
//end point is a part of the address that points to a specific resource
app.get('/employees/:id',(req,res)=>{
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if(!employee) res.status(404).send("Employee not found"); //404
    res.send(employee);
});
app.listen(3000,()=>console.log("listening to port 3000"))
//const port = process.env.PORT || 3000; //process is global obj with an environment variable
//app.listen(port,() => console.log(`Listening to port ${port}...`));
