import * as Types from "./types";
import API from "../action/default";

export const fetchLoans = bvn => {
  return dispatch => {
    dispatch({
      type: Types.VALIDATE_BVN_PENDING
    });
    let result = API({
      url: `client/loans/${bvn}`,
      method: "GET"
    })
      .then(({ data }) => {
        dispatch({
          type: Types.VALIDATE_BVN_FULFILLED,
          payload: data
        });
      })
      .catch(data => {
        dispatch({
          type: Types.VALIDATE_BVN_REJECTED,
          payload: data.response
        });
      });
    return result;
  };
};
export const fetchSavings = id => {
  console.log("id is logged here");
  return dispatch => {
    dispatch({
      type: Types.FETCH_SAVINGS_PENDING
    });
    let result = API({
      url: `/Savings/transactions/${id}`,
      method: "GET"
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: Types.FETCH_SAVINGS_FULFILLED,
          payload: data.data
        });
      })
      .catch(data => {
        console.log(data);
        dispatch({
          type: Types.FETCH_SAVINGS_REJECTED,
          payload: data.response
        });
      });
    return result;
  };
};
