import axios from "axios";
import {
  NOTE_FAIL,
  NOTE_REQUEST,
  NOTE_SUCCESS
} from "../constants/NoteConstants";



//login
export const noteAction = () => async (dispatch) => {
  try {
    dispatch({ type: NOTE_REQUEST });

    const {data} = await axios.get("http://localhost:5000/api/v1/note");
    console.log(data);

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
