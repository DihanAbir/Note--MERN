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
    // const allNotes = data;
    console.log(`data => note action theke: `, typeof data);
    console.log(`data => note action theke: `, data);

    dispatch({ type: NOTE_SUCCESS, payload: data });
    // localStorage.setItem("userInfo", JSON.stringify(data));
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
