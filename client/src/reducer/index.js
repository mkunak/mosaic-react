import {
  FETCH_All_PERSONNEL_REQUEST,
  FETCH_All_PERSONNEL_SUCCESS,
  FETCH_All_PERSONNEL_FAILURE,
} from '../constants';

const updatePersonnelData = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      allPersonnel: [],
      loading: false,
      error: null,
    };
  }
  
  switch (action.type) {
    case FETCH_All_PERSONNEL_REQUEST:
      return {
        ...state.allPersonnel,
        loading: true,
      };
      
    case FETCH_All_PERSONNEL_SUCCESS:
      return {
        ...state.allPersonnel,
        allPersonnel: action.payload,
        loading: false,
      };
      
    case FETCH_All_PERSONNEL_FAILURE:
      return {
        ...state.allPersonnel,
        error: action.payload,
      };
      
    default:
      return state.allPersonnel;
  }
};

export default updatePersonnelData;
