import * as actionsTypes from './actionTypes'; // import constants


export const resetData = () => {
    return {
        type: actionsTypes.RESET_DATA,
        payload: {
            userData: {}
        }
    }
}

export const userLoggedIn = userData => {
    return {
        type: actionsTypes.USER_LOGGED_IN,
        payload: {
            userData: {
                userName: userData.UserName,
                userId: userData.Id,
                userFullName: userData.FName + " " + userData.LName,
                userRole: userData.Role,
                userEmail: userData.Email,
                userImage: userData.image,
                userMobilenumber: userData.MoNumber,
                userAlternumebr: userData.AltNumber,
                userGender: userData.Gender,
                userAddress: userData.Address,
                userCity: userData.City,
                userState: userData.State
            }
        }
    }
}

export const userLoggedOut = () => {
    return {
        type: actionsTypes.USER_LOGGED_OUT,
        payload: {}
    }
}
export const otherUserLoggedOut = () => {
    return {
        type: actionsTypes.OTHER_USER_LOGGED_OUT,
        payload: {}
    }
}
export const setDefaultValues = defaultValues => {

    return {
        type: actionsTypes.DEFAULT_VALUES,
        payload: {
            halfDay: defaultValues.halfDay,
            inTime: defaultValues.inTime,
            lateTime: defaultValues.lateTime,
            outTim: defaultValues.outTime
        }
    }
}