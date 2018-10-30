import * as actionTypes from '../actions';

const initialState = {
  notes: [],
  gettingNotes: false,
  addingNote: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case actionTypes.GET_NOTES:
      return { ...state, notes: action.payload, gettingNotes: false };
    case actionTypes.ADDING_NOTE:
      return { ...state, addingNote: true };
    case actionTypes.ADD_NOTE:
      return { ...state, notes: action.payload, addingNote: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingNotes: false,
        addingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
}