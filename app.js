// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



const express = require('express')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology:true
})
.then(() => {
  console.log("DB IS CONNECTED");
}).catch(() => {
  console.log(("DB is not connected"));
});

const app = express()
const port = 3000


// const greet = (req,res) => {
//   res.send("Hello World !")
// }

// const term = (req,res,next) => {
//   console.log("greetings !!!");
//   next()
// }

// app.get('/',term, greet);


const Animal = mongoose.model('Animal', { name: String });

const dog = new Animal({ name: 'Shubham' });
dog.save().then(() => console.log('bhaw-bhaw'));



app.get('/',(req, res) => {
  res.json('Hello World!')
})

app.use('/for',() => {
  console.log("This is an Middleware example !!!");
})

app.get('/for', (req, res) => {
  res.json('This is forward slash!')
})

app.listen(port, () => {
  console.log(`Port is running at:${port}`)
})

