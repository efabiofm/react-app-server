const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// constants
const conn = 'mongodb://mongodb:efx2m#126@cluster0-shard-00-00-lxe1y.mongodb.net:27017,cluster0-shard-00-01-lxe1y.mongodb.net:27017,cluster0-shard-00-02-lxe1y.mongodb.net:27017/react-app?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
const apiPort = 3001;

// mongodb connection
mongoose.connect(conn, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => console.log('Connection established!'));
db.on('error', (err) => console.log('Connection error!', err));

// cors config
const corsOptions = { origin: 'http://localhost:3000' };
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

// routes
const houseRoutes = require('./routes/house.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/realestate', houseRoutes);

app.listen(apiPort, () => console.log(`Listening on port ${apiPort}`));
