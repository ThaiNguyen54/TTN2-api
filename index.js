// Third-party components
import Express from 'express';
import bodyParser from "body-parser";
import cors from 'cors'
import mysql from 'mysql2/promise.js'
import sql from 'mysql';

// Our components
import DatabaseConfig from './app/config/Database.js'
import HocVienRoute from "./app/route/HocVienRoute.js";
import KhuSinhHoatRoute from "./app/route/KhuSinhHoatRoute.js";

let App = Express()

// Parse application/json
App.use(bodyParser.json({
    limit: '10mb'
}))

// Parse application/x-www-form-urlencoded
App.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: true
}))

// Allow CORS
App.use(cors())

// Routes for APIs
App.use(HocVienRoute)
App.use(KhuSinhHoatRoute)

// Connect to database
let conn = sql.createConnection(DatabaseConfig.mysql)
conn.connect(function (err) {
    if (err) throw err;
    console.log('Connected')
})

// Create port
const Port = 3000


App.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})
