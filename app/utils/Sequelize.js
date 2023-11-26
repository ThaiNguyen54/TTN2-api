import DatabaseConfig from '../config/Database.js'
import sequelize from 'sequelize'

const MySQLSequelize = new sequelize(
    DatabaseConfig.mysql.database,
    DatabaseConfig.mysql.user,
    DatabaseConfig.mysql.password,
    {
        host: DatabaseConfig.mysql.host,
        port: DatabaseConfig.mysql.port,
        dialect: DatabaseConfig.mysql.dialect,
        logging: false
    }
);

export default MySQLSequelize