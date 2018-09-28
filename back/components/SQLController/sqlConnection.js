var Sequelize = require('sequelize');
var sequelizeConn = new Sequelize(global.envConfig.MYSQL_DATABASE_NAME, global.envConfig.MYSQL_USERNAME, global.envConfig.MYSQL_PASSWORD, {
    host: global.envConfig.MYSQL_HOST,
    dialect: 'mysql',
    logging:true,
    omitNull: true,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
sequelizeConn.authenticate().then(()=>{
    console.log('connect to database success.');
}).catch(err=>{
    console.error('unable to connect to the database: '+err);
});
module.exports = sequelizeConn;