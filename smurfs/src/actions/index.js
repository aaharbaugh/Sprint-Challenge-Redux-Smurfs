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
