const express = require('express');
const BodyParser = require('body-parser');
const authRoutes = require('../routes/auth');
const cors = require('cors');
const morgan = require('morgan');
const analyticsRoutes = require('../routes/analytics');
const categoryRoutes = require('../routes/category');
const orderRoutes = require('../routes/order');
const positionRoutes = require('../routes/position');
const app = express();




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