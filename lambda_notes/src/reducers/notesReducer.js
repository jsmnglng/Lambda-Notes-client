import {
  ERROR,
  GET_ALL_NOTES,
  GET_SINGLE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE
} from "../actions/types";

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return action.payload;
    case ERROR:
      return action.payload;
    default:
      return state;
  }
};
