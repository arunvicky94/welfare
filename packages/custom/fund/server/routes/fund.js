(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Fund, app, auth, database, circles) {

        var fund = require('../controllers/fundController');

        app.route('/api/funds/:status')
            .get(fund.getFundsBystatus);
        app.param('status', fund.getFundsBystatus);
        app.route('/api/fund')
            .put(fund.updateFund)
            .post(fund.requestFund);
        app.route('/api/fund/:userId')
            // .post(auth, fund.request)
            .get(fund.getFundByUserId);
        app.param('userId', fund.getFundByUserId);

    };
})();
