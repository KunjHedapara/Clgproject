import axios from 'axios';

import { baseUrl, getHoliday, addNewHoliday, addNewleave, addNewEmployee, userLogin, faceReco, addAtt, uploadUserImage, getAtt, verifyEmailId, sendCode, updatepassword } from '../services/EndPoints'

// addNotification
export const employeelogin = async (param, callback) => {
    axios
        .post(baseUrl + userLogin, param)
        .then((res) => {
            if (res.status == 200) {
                callback(res.data.userData);
            }
        }).catch((e) => {
            callback(e);
            //console.log('Error', e)
        })
}
// addNotification
export const getHolidayList = async (callback) => {

    axios
        .get(baseUrl + getHoliday)
        .then((res) => {
            if (res.status == 200) {
                callback(res.data.userData);
            }
        }).catch((e) => {
            callback(e);
            //console.log('Error', e)
        })
}

export const addHoliday = async (params, callback) => {

    axios
        .post(baseUrl + addNewHoliday, params)
        .then((res) => {
            if (res.status == 200) {
                callback(res.data.holidayData);
            }
        }).catch((e) => {

            console.log('Error', e)
            callback(e);
        })
}


export const addEmployee = async (params, callback) => {
    console.log(params)

    axios
        .post(baseUrl + addNewEmployee, params)
        .then((res) => {
            if (res.status == 200) {
                callback(res.data.employeeData);
            }
        }).catch((e) => {

            console.log('Error', e)
            callback(e);
        })
}

export const getleave = async (callback) => {

    axios
        .get(baseUrl + getleave)
        .then((res) => {
            if (res.status == 200) {
                callback(res.data.userData);
            }
        }).catch((e) => {
            callback(e);
            //console.log('Error', e)
        })
}

export const addleave = async (params, callback) => {

    axios
        .post(baseUrl + addNewleave, params)
        .then((res) => {
            if (res.status == 200) {
                callback(res.data.leaveData);
            }
        }).catch((e) => {

            console.log('Error', e)
            callback(e);
        })
}

export const AddUserImage = async (params, successCallback, errorCallback) => {

    axios
        .post(baseUrl + uploadUserImage, params)
        .then((res) => {
            console.log('res', res.data);

            if (res.status == 200) {
                successCallback(res.data);
            }
        }).catch((e) => {
            errorCallback(e);
            //console.log('Error', e)
        })
}

export const matchFace = async (params, successCallback, errorCallback) => {
    console.log('params', params)
    axios
        .post(baseUrl + faceReco, params, { timeout: 400000 })
        .then((res) => {
            console.log('res', res);

            if (res.status == 200) {
                successCallback(res.data);
            }
        }).catch((e) => {
            errorCallback(e);
            //console.log('Error', e)
        })
}

// add attendance
export const addAttendance = async (params, successCallback, errorCallback) => {

    axios
        .post(baseUrl + addAtt, params)
        .then((res) => {
            if (res.status == 200) {
                successCallback(res.data.userData);
            }
        }).catch((e) => {
            errorCallback(e);
            //console.log('Error', e)
        })
}

export const getAttendance = async (params, successCallback, errorCallback) => {

    axios
        .post(baseUrl + getAtt, params)
        .then((res) => {
            if (res.status == 200) {
                successCallback(res.data.attendanceData);
            }
        }).catch((e) => {
            errorCallback(e);
            //console.log('Error', e)
        })
}

export const verifyEmail = async (params, successCallback, errorCallback) => {

    axios
        .post(baseUrl + verifyEmailId, params)
        .then((res) => {
            if (res.status == 200) {
                successCallback(res.data.status);
            }
        }).catch((e) => {
            errorCallback(e);
            //console.log('Error', e)
        })
}


export const sendOtp = async (params, successCallback, errorCallback) => {

    axios
        .post(baseUrl + sendCode, params)
        .then((res) => {

            console.log('res', res)
            if (res.status == 200) {
                successCallback(res.data.status);
            }
        }).catch((e) => {
            errorCallback(e);
            //console.log('Error', e)
        })
}


export const resetPassword = async (params, successCallback, errorCallback) => {
    console.log('params', params)
    axios
        .post(baseUrl + updatepassword, params)
        .then((res) => {

            console.log('res', res)
            if (res.status == 200) {
                successCallback(res.data.status);
            }
        }).catch((e) => {
            errorCallback(e);
            //console.log('Error', e)
        })
}