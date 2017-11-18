'use strict';

exports.web = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {title: 'Express'});
    })
};