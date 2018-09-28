var conn = require('../SQLController/sqlConnection');
var user = require('../SQLModels/sequelizeModel').User(conn);
var getUUID = require('../../utils/uuidCreater');
var create = function (req, res, next) {
    user.create({
        userId: getUUID(),
        userName: 'test123',
        password: 'test123',
        authentication: 0,
        recentIp: '127.0.0.1',
    });
    res.json({code:200});
};
module.exports = create;