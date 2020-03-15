import {
  FETCH_All_PERSONNEL_REQUEST,
  FETCH_All_PERSONNEL_SUCCESS,
  FETCH_All_PERSONNEL_FAILURE,
} from "../constants";

const updatePersonnelData = (state, action) => {
  if (typeof state === "undefined") {
    return {
      allPersonnel: [],
      sortingButtons: [],
      loading: false,
      error: null
    };
  }

  switch (action.type) {
    case FETCH_All_PERSONNEL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_All_PERSONNEL_SUCCESS:
      return {
        ...state,
        allPersonnel: action.payload,
        loading: false
      };

    case FETCH_All_PERSONNEL_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default updatePersonnelData;
