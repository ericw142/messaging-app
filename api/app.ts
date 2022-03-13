const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const mainRouter = require('./routes/mainRouter')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.set('trust proxy', true)

app.use('/', mainRouter)
app.use(function(req,res,next) {
    next(createError(404))
})

mongoose.connect("mongodb://localhost/config", { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
});


app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
});
  
module.exports = app;