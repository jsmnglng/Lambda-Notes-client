import axios from "axios";

import {
  ERROR,
  GET_ALL_NOTES,
  GET_SINGLE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE
} from "./types";

const URL = "https://api-lambda-notes.herokuapp.com/api/notes";

// Fetch all notes
export const getNotes = () => async dispatch => {
  try {
    const res = await axios.get(URL);
    dispatch({ type: GET_ALL_NOTES, payload: res.data });
  } catch (err) {
    dispatch({ type: ERROR, payload: `FETCH ALL NOTES ERROR: ${err}` });
  }
};

// Fetch single note
export const getNote = id => async dispatch => {
  try {
    const res = await axios.get(`${URL}/${id}`);
    dispatch({ type: GET_SINGLE_NOTE, payload: res.data });
  } catch (err) {
    dispatch({ type: ERROR, payload: `FETCH SINGLE NOTE ERROR: ${err}` });
  }
};

// export const addNote = note => {
//   return dispatch => {
//     dispatch({ type: ADDING_NOTE });

//     axios
//       .post(`${URL}/create`, note)
//       .then(response => {
//         console.log("ADD NOTE ACTION RES", response);
//         dispatch({ type: ADD_NOTE, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

// export const deleteNote = id => {
//   return dispatch => {
//     dispatch({ type: DELETING_NOTE });

//     axios
//       .delete(`${URL}/${id}`)
//       .then(response => {
//         dispatch({ type: DELETE_NOTE, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

// export const editNote = (id, note) => {
//   return dispatch => {
//     dispatch({ type: EDITING_NOTE });

//     axios
//       .put(`${URL}/${id}`, note)
//       .then(response => {
//         dispatch({ type: EDIT_NOTE, payload: { id, ...response.data } });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };
