import dotenv from 'dotenv'
dotenv.config()

let DBConnectorSetting = {
    mysql : {
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        dialect: process.env.DIALECT,
    }
}

export default DBConnectorSetting