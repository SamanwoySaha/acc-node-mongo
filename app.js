const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const db = require('./db/db');

const indexRouter = require('./routes/index');
const coursesRouter = require('./routes/courses');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/courses', coursesRouter);

app.listen(5000);

module.exports = app;