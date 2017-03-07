(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Fund, app, auth, database, circles) {

      // var jwt = require('express-jwt');
      // var auth = jwt({
      //   secret: 'MY_SECRET',
      //   userProperty: 'payload'
      //   });

        var fund = require('../controllers/fundController');

        // var requiresAdmin = circles.controller.hasCircle('admin');
        // var requiresLogin = circles.controller.hasCircle('authenticated');

        app.route('/api/fund')
            .put(fund.updateFund)
            .post(fund.requestFund);

        // app.get('/api/fund/example/anyone', function(req, res) {
        //     res.send('Anyone can access this');
        // });
        //
        // app.get('/api/fund/example/auth', function(req, res) {
        //     res.send('Only authenticated users can access this');
        // });
        //
        // app.get('/api/fund/example/admin', function(req, res) {
        //     res.send('Only users with Admin role can access this');
        // });
        //
        // app.get('/api/fund/example/render', function(req, res) {
        //     Fund.render('index', {
        //         package: 'fund'
        //     }, function(err, html) {
        //         //Rendering a view from the Package server/views
        //         res.send(html);
        //     });
        // });
    };
})();
