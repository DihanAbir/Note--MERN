import {
  NOTE_FAIL,
  NOTE_REQUEST,
  NOTE_SUCCESS,
} from "../constants/NoteConstants";

export const noteReducer = (state = [], action) => {
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case NOTE_REQUEST:
      return { loading: true };
    case NOTE_SUCCESS:
      return { loading: false, noteInfo: payload };
    case NOTE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
