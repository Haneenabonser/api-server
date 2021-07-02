'use sterict';

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose'); 

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    server.start(PORT);
}).catch((e)=>{
    console.error('Connection Failed', e.message);
});
