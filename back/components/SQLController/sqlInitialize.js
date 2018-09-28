var checkDatabase = function () {
    var Sequelize = require('sequelize');
    var sequelize = new Sequelize('', global.envConfig.MYSQL_USERNAME, global.envConfig.MYSQL_PASSWORD,{
        host: global.envConfig.MYSQL_HOST,
        dialect:'mysql'
    });
    sequelize.query(`create database if not exists ${global.envConfig.MYSQL_DATABASE_NAME} default charset utf8 collate utf8_general_ci`)
    .then(data=>{//不存在则创建数据库
        console.log('initing database...');
        var tableSequelize = new Sequelize(global.envConfig.MYSQL_DATABASE_NAME, global.envConfig.MYSQL_USERNAME, global.envConfig.MYSQL_PASSWORD,{
            host: global.envConfig.MYSQL_HOST,
            dialect:'mysql'
        });
        tableSequelize.query(`create table if not exists ${global.envConfig.MYSQL_DATABASE_USER_TABLE}{
            user_id text primary key,
            authentication int not null,
            user_name text not null,
            password text not null,
            recent_ip text defalut null,
        }`)
        .then(()=>{
            console.log('create user table success');
        })
    }).catch(error=>{
        console.error(error);
    });
};
module.exports = checkDatabase;
