import {
  FETCH_All_PERSONNEL_REQUEST,
  FETCH_All_PERSONNEL_SUCCESS,
  FETCH_All_PERSONNEL_FAILURE,
} from "../constants";

export const fetchToGetAllPersonnel = (Services, dispatch) => () => {
  dispatch({ type: FETCH_All_PERSONNEL_REQUEST });
  Services.getAllPersonnel()
    .then(res => {
      dispatch({
        type: FETCH_All_PERSONNEL_SUCCESS,
        payload: res.data.employees
      });
    })
    .catch(err =>
      dispatch({ type: FETCH_All_PERSONNEL_FAILURE, payload: err })
    );
};
