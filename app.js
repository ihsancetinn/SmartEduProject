const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();
//Connect DB
await mongoose
  .connect('mongodb://localhost/smartedu-db')
  .then(() => {
    console.log('Mongo DB Connected.');
  })
  .catch((err) => {
    console.log(err);
  });
//Template Engine
app.set('view engine', 'ejs');

//Mıddlewares
app.use(express.static('public'));

//Routes

app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Port ${port} dinleniyor..`);
});
