import axios from "axios";

export const getClientRequests = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_CLIENT_REQUESTS",
    });
    let link = `http://localhost:5000/api/v1/newClientRequests`;

    const { data } = await axios.get(link);
    dispatch({
      type: "ALL_CLIENT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_CLIENT_FAIL",
      payload: error.response.data.message,
    });
  }
}