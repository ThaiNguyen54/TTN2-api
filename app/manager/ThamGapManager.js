// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import ThamGap from "../models/ThamGap.js";

export function AddThamgap (data, callback) {
    try {

        ThamGap.create(data).then(nguoithan => {
            "use-strict";
            return callback(null, null, 200, null, nguoithan);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_tham_gap_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_tham_gap_fail', 400, error, null);
    }
}

export function GetAllThamGap (callback) {
    try {
        ThamGap.findAndCountAll({}).then((data) => {
            let ThamGap = data.rows;
            let output = {
                data: ThamGap
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_tham_gap_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_tham_gap_fail', 400, error, null);
    }
}

export function UpdateThamGap (ThamGapId, ThamGapData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(ThamGapId, 'string')
            && !Helper.VariableTypeChecker(ThamGapId, 'number')) {
            return callback (2, 'id_tham_gap_hop_le', 400, 'id tham gap không đúng', null)
        }

        if (!ThamGapData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = ThamGapId;
        queryObj.updatedAt = new Date();
        queryObj = ThamGapData

        ThamGap.findOne({where: where}).then(thamgap => {
            "use strict"
            if(thamgap) {
                ThamGap.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, ThamGapId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_tham_gap_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'tham_gap_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_tham_gap_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_tham_gap_fail', 400, error);
    }
}

export function DeleteThamGap (ThamGapId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(ThamGapId, 'string') &&
            !Helper.VariableTypeChecker(ThamGapId, 'number')) {
            return callback(2, 'ivalid_tham_gap_id', 400, 'id of tham gap is incorrect', null);
        }

        where = {id: ThamGapId};
        ThamGap.findOne({where:where}).then(khusinhhoat => {
            "use strict";
            ThamGap.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_tham_gap_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_tham_gap_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_tham_gap_failed', 400, error);
    }
}