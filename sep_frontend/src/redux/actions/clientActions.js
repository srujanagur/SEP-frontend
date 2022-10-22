import axios from "axios";

export const getClients = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_CLIENT_REQUESTS",
    });
    let link = `http://localhost:5000/api/v1/newClientRequests`;

    const { data } = await axios.get(link);
    console.log("from clientactions bg" + data);
    dispatch({
      type: "ALL_CLIENT_SUCCESS",
      payload: data.clientRequests,
    });
  } catch (error) {
    dispatch({
      type: "ALL_CLIENT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const createEvent = (clientData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_CLIENT_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/newClientRequest`,
      clientData,
      config
    );
    dispatch({
      type: "NEW_CLIENT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NEW_CLIENT_FAIL",
      payload: error.response.data.message,
    });
  }
};
