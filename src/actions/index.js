import axios from 'axios';

export const START_SMURF_FETCH = "START_SMURF_FETCH";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_FAILURE = "SMURF_FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const fetchSmurfs = () => (dispatch) => {
    dispatch({
        type: START_SMURF_FETCH
    });
    axios.get('http://localhost:3333/smurfs')
    .then((response) => {
        console.log('response', response.data);
        dispatch({
            type: SMURF_FETCH_SUCCESS,
            payload: response.data
        })
        dispatch({
            type: UPDATE_ERROR,
            payload: ''
        })
    })
    .catch((error) => {
        console.log('error', error)
        dispatch({
            type: SMURF_FETCH_FAILURE,
            payload: 'Unable to fetch smurf'
        })
    });
}

export const addSmurf = (smurf) => {
    return {
        type: ADD_SMURF,
        payload: smurf
    }
}

export const updateError = (error) => {
    return {
        type: UPDATE_ERROR,
        payload: error
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.