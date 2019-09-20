import * as Types from './types';
import API from '../action/default';
import NEWAPI from '../action/default/newapi';

export const validateUser = bvn => {
    return dispatch => {
        dispatch({
            type: `${Types.VALIDATE_USER}_PENDING`
        })
        let responses = API({
            url:`client/details/${bvn}`,
            method: "GET"
        })
        .then(({data})=>{
            dispatch({
                type: `${Types.VALIDATE_USER}_FULFILLED`,
                payload: data
            })
        })
        .catch(data=>{
            dispatch({
                type: `${Types.VALIDATE_USER}_REJECTED`,
                payload: data.response
            })
        })
        return responses;
    }
}

export const validateBVN = bvn => {
    return dispatch => {
        dispatch({
            type: `${Types.VALIDATE_BVN}_PENDING`
        })
        let responses = API({
            url:`/validation/WEMABVN/${bvn}`,
            method: "GET"
        }).then(({data})=>{
            dispatch({
                type: `${Types.VALIDATE_BVN}_FULFILLED`,
                payload: data
            })
        }).catch(data=>{
            dispatch({
                type: `${Types.VALIDATE_BVN}_REJECTED`,
                payload: data
            })
        })
        return responses;
    }
}

export const getPassword = password => {
    return dispatch => {
        dispatch({
            type: Types.GET_USER_PASSWORD,
            payload: password
        })
    }
}

export const getPin = pin => {
    return dispatch => {
        dispatch({
            type: Types.GET_USER_PIN,
            payload: pin
        })
    } 
}

export const getLoanType = loan_type => {
    return dispatch => {
         dispatch({
            type: Types.GET_LOAN_TYPE,
            payload: loan_type
        })
    } 
}

export const getInvestType = invest_type => {
    return dispatch => {
        dispatch({
            type: Types.GET_INVEST_TYPE,
            payload: invest_type
        })
    } 
}

export const getLoanAmount = loan_amount => {
    return dispatch => {
        dispatch({
            type: Types.GET_LOAN_AMOUNT,
            payload: loan_amount
        })
    } 
}

export const getInvestAmount = invest_amount => {
    return dispatch => {
        dispatch({
            type: Types.GET_INVEST_AMOUNT,
            payload: invest_amount
        })
    } 
}

export const getLoanTenure = loan_tenure => {
    return dispatch => {
        dispatch({
            type: Types.GET_LOAN_TENURE,
            payload: loan_tenure
        })
    } 
}

export const getInvestTenure = invest_tenure => {
    return dispatch => {
        dispatch({
            type: Types.GET_INVEST_TENURE,
            payload: invest_tenure
        })
    } 
}

export const getInvestName = invest_name => {
    return dispatch => {
        dispatch({
            type: Types.GET_INVEST_NAME,
            payload: invest_name
        })
    } 
}

export const getLoanPurpose = loan_purpose => {
    return dispatch => {
        dispatch({
            type: Types.GET_LOAN_PURPOSE,
            payload: loan_purpose
        })
    } 
}

export const getUserSocial = social => {
    return dispatch => {
        dispatch({
            type: Types.GET_USER_SOCIAL,
            payload: social
        })
    } 
}

export const getUsersInfo = data => {
    return dispatch => {
        dispatch({
            type: Types.GET_USER_INFOS,
            payload: data
        })
    } 
}

export const createClient = data => {
    return dispatch => {
        dispatch({
            type: `${Types.CREATE_CLIENT}_PENDING`
        })
        let responses = API({
            url:`/client/create`,
            method: "POST",
            data
        })
        .then(({data})=>{
            dispatch({
                type: `${Types.CREATE_CLIENT}_FULFILLED`,
                payload: data
            })
        })
        .catch(data=>{
            dispatch({
                type: `${Types.CREATE_CLIENT}_REJECTED`,
                payload: data
            })
        })
        return responses;
    }
}

export const updateClient = data => {
    return dispatch => {
        dispatch({
            type: `${Types.UPDATE_CLIENT}_PENDING`
        })
        let responses = API({
            url:`/client/update`,
            method: "POST",
            data: data
        })
        .then(({data})=>{
            dispatch({
                type: `${Types.UPDATE_CLIENT}_FULFILLED`,
                payload: data
            })
        })
        .catch(data=>{
            dispatch({
                type: `${Types.UPDATE_CLIENT}_REJECTED`,
                payload: data
            })
        })
        return responses;
    }
}

export const createInvestment = data => {
    return dispatch => {
        dispatch({
            type: `${Types.CREATE_INVESTMENT}_PENDING`
        })
        let responses = NEWAPI({
            url:`/generate`,
            method: "POST",
            data: data
        })
        .then(({data})=>{
            dispatch({
                type: `${Types.CREATE_INVESTMENT}_FULFILLED`,
                payload: data
            })
        })
        .catch(data=>{
            dispatch({
                type: `${Types.CREATE_INVESTMENT}_REJECTED`,
                payload: data
            })
        })
        return responses;
    }
}

export const createLoan = data => {
    return dispatch => {
        dispatch({
            type: `${Types.CREATE_LOAN}_PENDING`
        })
        let responses = NEWAPI({
            url:`/generate`,
            method: "POST",
            data: data
        })
        .then(({data})=>{
            dispatch({
                type: `${Types.CREATE_LOAN}_FULFILLED`,
                payload: data
            })
        })
        .catch(data=>{
            dispatch({
                type: `${Types.CREATE_LOAN}_REJECTED`,
                payload: data
            })
        })
        return responses;
    }
}