import {
  NOTE_FAIL,
  NOTE_REQUEST,
  NOTE_SUCCESS
} from "../constants/NoteConstants";


export const noteReducer = (state = {allNotes: []}, action) => {
  const { type, payload } = action;
  switch (type) {
    case NOTE_REQUEST:
      return { loading: true, allNotes:[] };
    case NOTE_SUCCESS:
      return { loading: false, allNotes : payload.data };
    case NOTE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
