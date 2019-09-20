import * as Types from "../action/types";

let initState = {
    "user_bvn_details": {},
    "user_bvn_details_error": {},
    "client_details": {},
    "client_details_error": {},
    "loading": false,
    "create_user": {
        "password": "",
        "pin": ""
    },
    "client_created": {},
    "client_created_error": {},
    "loan_details": {
        "loan_type": "",
        "loan_amount": 0,
        "loan_tenure": "",
        "loan_purpose": "",
    },
    "invest_details": {
        "invest_type": "",
        "invest_amount": 0,
        "invest_tenure": "",
        "invest_name": "",
    },
    "update_user": {},
    "user_updated": {},
    "user_updated_error": {},
    "loan_created": {},
    "loan_created_error": {},
    "invest_created": {},
    "invest_created_error": {}
}
 
export const onboardingReducer = (state = initState,action) =>{
    switch(action.type) {
        case `${Types.VALIDATE_BVN}_PENDING` : {
            return {
                ...state,
                "loading": true
            }
        }
        case `${Types.VALIDATE_BVN}_FULFILLED` : {
            return {
                ...state,
                "user_bvn_details": action.payload,
                "loading": false
            }
        }
        case `${Types.VALIDATE_BVN}_REJECTED` : {
            return {
                ...state,
                "user_bvn_details_error": action.payload,
                "loading": false
            }
        }
        case `${Types.VALIDATE_USER}_PENDING` : {
            return {
                ...state,
                "loading": true
            }
        }
        case `${Types.VALIDATE_USER}_FULFILLED` : {
            return {
                ...state,
                "client_details": action.payload,
                "loading": false
            }
        }
        case `${Types.VALIDATE_USER}_REJECTED` : {
            return {
                ...state,
                "client_details_error": action.payload,
                "loading": false
            }
        }
        case Types.GET_USER_PASSWORD : {
            return {
                ...state,
                "create_user": {
                    ...state.create_user,
                    "password": action.payload
                }
            }
        }
        case Types.GET_USER_PIN : {
            return {
                ...state,
                "create_user": {
                    ...state.create_user,
                    "pin": action.payload
                }
            }
        }
        case `${Types.CREATE_CLIENT}_PENDING` : {
            return {
                ...state,
                "loading": true
            }
        }
        case `${Types.CREATE_CLIENT}_FULFILLED` : {
            return {
                ...state,
                "client_created": action.payload,
                "loading": false
            }
        }
        case `${Types.CREATE_CLIENT}_REJECTED` : {
            return {
                ...state,
                "client_created_error": action.payload,
                "loading": false
            }
        }
        case Types.GET_LOAN_TYPE : {
            return {
                ...state,
                "loan_details": {
                    ...state.loan_details,
                    "loan_type": action.payload
                }
            }
        }
        case Types.GET_INVEST_TYPE : {
            return {
                ...state,
                "invest_details": {
                    ...state.invest_details,
                    "invest_type": action.payload
                }
            }
        }
        case Types.GET_INVEST_AMOUNT : {
            return {
                ...state,
                "invest_details": {
                    ...state.invest_details,
                    "invest_amount": action.payload
                }
            }
        }
        case Types.GET_LOAN_AMOUNT : {
            return {
                ...state,
                "loan_details": {
                    ...state.loan_details,
                    "loan_amount": action.payload
                }
            }
        }
        case Types.GET_LOAN_TENURE : {
            return {
                ...state,
                "loan_details": {
                    ...state.loan_details,
                    "loan_tenure": action.payload
                }
            }
        }
        case Types.GET_INVEST_TENURE : {
            return {
                ...state,
                "invest_details": {
                    ...state.invest_details,
                    "invest_tenure": action.payload
                }
            }
        }
        case Types.GET_INVEST_NAME : {
            return {
                ...state,
                "invest_details": {
                    ...state.invest_details,
                    "invest_name": action.payload
                }
            }
        }
        case Types.GET_LOAN_PURPOSE : {
            return {
                ...state,
                "loan_details": {
                    ...state.loan_details,
                    "loan_purpose": action.payload
                }
            }
        }
        case Types.GET_USER_SOCIAL : {
            return {
                ...state,
                "update_user": {
                    ...state.update_user,
                    "social": action.payload
                }
            }
        }
        case Types.GET_USER_INFOS : {
            return {
                ...state,
                "update_user": {
                    ...state.update_user,
                    ...action.payload
                }
            }
        }
        case `${Types.UPDATE_CLIENT}_PENDING` : {
            return {
                ...state,
                "loading": true
            }
        }
        case `${Types.UPDATE_CLIENT}_FULFILLED` : {
            return {
                ...state,
                "user_updated": action.payload,
                "loading": false
            }
        }
        case `${Types.UPDATE_CLIENT}_REJECTED` : {
            return {
                ...state,
                "user_updated_error": action.payload,
                "loading": false
            }
        }
        case `${Types.CREATE_LOAN}_PENDING` : {
            return {
                ...state,
                "loading": true
            }
        }
        case `${Types.CREATE_LOAN}_FULFILLED` : {
            return {
                ...state,
                "loan_created": action.payload,
                "loading": false
            }
        }
        case `${Types.CREATE_LOAN}_REJECTED` : {
            return {
                ...state,
                "loan_created_error": action.payload,
                "loading": false
            }
        }
        case `${Types.CREATE_INVESTMENT}_PENDING` : {
            return {
                ...state,
                "loading": true
            }
        }
        case `${Types.CREATE_INVESTMENT}_FULFILLED` : {
            return {
                ...state,
                "invest_created": action.payload,
                "loading": false
            }
        }
        case `${Types.CREATE_INVESTMENT}_REJECTED` : {
            return {
                ...state,
                "invest_created_error": action.payload,
                "loading": false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}