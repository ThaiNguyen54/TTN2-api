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
import HocVien_CNBatBuocRoute from "./app/route/HocVien_CNBatBuocRoute.js";
import HocVien_CNTuNguyenRoute from "./app/route/HocVien_CNTuNguyenRoute.js";
import HocVien_KhuSinhHoatRoute from "./app/route/HocVien_KhuSinhHoatRoute.js";
import KhenThuongRoute from "./app/route/KhenThuongRoute.js";
import KyLuatRoute from "./app/route/KyLuatRoute.js";
import MoiQuanHeRoute from "./app/route/MoiQuanHeRoute.js";
import NguoiThanRoute from "./app/route/NguoiThanRoute.js";
import TronVienPhepRoute from "./app/route/TronVienPhepRoute.js";
import BanGiaoRoute from "./app/route/BanGiaoRoute.js";

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
const corsOption = {
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 200,
};
App.use(cors(corsOption))

// Routes for APIs
App.use(HocVienRoute);
App.use(KhuSinhHoatRoute);
App.use(HocVien_CNBatBuocRoute);
App.use(HocVien_CNTuNguyenRoute);
App.use(HocVien_KhuSinhHoatRoute);
App.use(KhenThuongRoute);
App.use(KyLuatRoute);
App.use(MoiQuanHeRoute);
App.use(NguoiThanRoute);
App.use(TronVienPhepRoute);
App.use(BanGiaoRoute)

// Connect to database
let conn = sql.createConnection(DatabaseConfig.mysql)
conn.connect(function (err) {
    if (err) throw err;
    console.log('Connected')
})

// Create port
const Port = 3001


App.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})
