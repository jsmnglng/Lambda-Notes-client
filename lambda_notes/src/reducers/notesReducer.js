import {
  ERROR,
  GET_ALL_NOTES,
  GET_SINGLE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE
} from "../actions/types";

const initialState = {
  notes: [],
  note: {},
  error: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return { ...state, notes: action.payload };
    case GET_SINGLE_NOTE:
      return { ...state, note: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
