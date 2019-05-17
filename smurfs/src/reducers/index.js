import {FETCH_SMURF, FETCHED_SMURF, FETCH_SMURF_FAIL, ADD_SMURF, ADDED_SMURF, ADD_SMURF_FAIL} from '../actions/index';

const initialState = {
  smurfs: [],
  error: null,
  fetchingSmurfs: false,
  addingSmurfs: false,
  updatingSmurf: false,
  deletingSmurf: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer(state = initialState, action){
  switch(action.type) {
    case FETCH_SMURF:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true,
      };
    case FETCHED_SMURF:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      }
    case ADD_SMURF:
      return {
        ...state,
        addingSmurfs: true,
        error: null
      };
    case ADDED_SMURF:
      return {
        ...state,
        addingSmurfs: false,
        error: null,
        smurfs: action.payload
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        addingSmurfs: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;