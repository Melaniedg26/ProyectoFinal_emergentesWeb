const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars').create({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials')
});

const errorHandler = require('errorhandler');

const morgan = require('morgan');
const multer = require('multer');
const routes = require('../routes/index');

module.exports = app => {
    // settings
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../views'));
    app.engine('.hbs', exphbs.engine);
    app.set('view engine', '.hbs');

    // middlewares
    app.use(morgan('dev'));
    app.use(multer({ dest: path.join(__dirname, '../public/upload/temp') }).single('image'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // routes
    routes(app);

    // static files
    app.use('/public', express.static(path.join(__dirname, '../public')));

    // errorhandlers
    if (app.get('env') === 'development') {
        app.use(errorHandler());
    }

    return app;
}