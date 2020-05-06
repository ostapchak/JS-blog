const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./keys');

const port = process.env.PORT || 5000;
const clientPath = path.join(__dirname, 'client');

mongoose.connect(keys.mongoURI)
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.error(err))


const app = express();
app.use(express.static(clientPath));

app.listen(port, () => {
   console.log(`Server has been started on port ${port}...`);
   
})