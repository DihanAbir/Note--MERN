import {
  NOTE_FAIL,
  NOTE_REQUEST,
  NOTE_SUCCESS,
} from "../constants/NoteConstants";
import axios from "axios";

//login
export const noteAction = () => async (dispatch) => {
  try {
    dispatch({ type: NOTE_REQUEST });

    const { data } = await axios.get("http://localhost:5000/api/v1/note");
    const allNotes = data.data[0];
    console.log(`data => note action theke: `, typeof allNotes);

    dispatch({ type: NOTE_SUCCESS, payload: allNotes });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: NOTE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
