import axios from 'axios';

export const FETCH_SMURF = "FETCH_SMURF";
export const FETCHED_SMURF = "FETCHED_SMURF";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: FETCHED_SMURF, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_FAIL, payload: err})
      })
};

export const ADD_SMURF = "ADD_SMURF";
export const ADDED_SMURF = "ADDED_SMURF";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        dispatch({ type: ADDED_SMURF, payload: res.data})
      })
      .catch(err => {
        dispatch({ type: ADD_SMURF_FAIL, payload: err})
      })
};

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETED_SMURF = "DELETED_SMURF";
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL";

export const deleteSmurf = smurfId => dispatch => {
    dispatch({ type: DELETE_SMURF });
    axios
      .delete("http://localhost:3333/smurfs/" + smurfId)
      .then(res => {
        dispatch({ type: DELETED_SMURF, payload: res.data})
      })
      .catch(err => {
        dispatch({ type: DELETE_SMURF_FAIL, payload: err})
      })
};

export const UPDATE_SMURF = "UPDATE_SMURF";
export const UPDATED_SMURF = "UPDATED_SMURF";
export const UPDATE_SMURF_FAIL = "UPDATE_SMURF_FAIL";

export const updateSmurf = (smurfId, newSmurf) => dispatch => {
    dispatch({ type: UPDATE_SMURF });
    return axios
      .put("http://localhost:3333/smurfs/" + smurfId, newSmurf)
      .then(res => {
        dispatch({ type: UPDATE_SMURF, payload: res.data})
      })
      .catch(err => {
        dispatch({ type: UPDATE_SMURF_FAIL, payload: err})
      })
};