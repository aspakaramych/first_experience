const express = require('express');
const BodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const morgan = require('morgan');
const keys = require('./config/keys');
const MongoClient = require("mongodb").MongoClient
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const app = express();

const mongoClient = new MongoClient(keys.Db_url)
const db = mongoClient.db(keys.Db_locate)

MongoClient.connect()
    .then(() => {
        console.log('MongoDb connected')
        console.log(db.command({ping: 1}))
    })
    .catch(err => console.log(err))
    .finally(() => {
        MongoClient.close()
        console.log('MongoDb disconnected')
    })


app.use(morgan('dev'));
app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;