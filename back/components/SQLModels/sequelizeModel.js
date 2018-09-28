var Sequelize = require('sequelize');
var sqlModel = {
    User: function (sequelize) {
        var user = sequelize.define('user',
            {
                userId: {
                    field: 'user_id',
                    primaryKey: true,
                    type: Sequelize.STRING,
                    allowNull: false
                },
                userName: {
                    field: 'user_name',
                    type: Sequelize.STRING,
                    allowNull: false
                },
                password: {
                    field: 'password',
                    type: Sequelize.STRING,
                    allowNull: false
                },
                authentication: {
                    field: 'authentication',
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                recentIp: {
                    field: 'recent_ip',
                    type: Sequelize.STRING,
                    allowNull: false
                },
            },
            {
                tableName: 'user',
                timestamps: false,
                freezeTableName: true
            }
        );
        return user;
    },
}

module.exports = sqlModel;