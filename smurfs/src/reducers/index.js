/*
  Be sure to import in all of the action types from `../actions`
*/

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
    default:
      return state;
  }
}

export default reducer;