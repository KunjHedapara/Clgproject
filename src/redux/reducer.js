import * as actionTypes from './actionTypes';

const initialState = {
    login: [],
    defaultValues: []
}


export default reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.USER_LOGGED_IN:
            return { ...state, login: action.payload }

        case actionTypes.RESET_DATA:
            return { ...state, login: action.payload }


        case actionTypes.USER_LOGGED_OUT:
            return initialState

        case actionTypes.DEFAULT_VALUES:
            return { ...state, defaultValues: action.payload }

        default:
            return state
    }


}