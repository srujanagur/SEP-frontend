import axios from "axios";

export const getEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_EVENT_REQUESTS",
    });
    let link = `http://localhost:5000/api/v1/newEvents`;

    const { data } = await axios.get(link);
    // console.log("from actions" + data);
    //const requireddata = JSON.stringify(data.events);
    //console.log("required" + requireddata);
    dispatch({
      type: "ALL_EVENT_SUCCESS",
      payload: data,
    });
    console.log("after distatch" + data);
  } catch (error) {
    dispatch({
      type: "ALL_EVENT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const createEvent = (eventData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_EVENT_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/newEvent`,
      eventData,
      config
    );
    dispatch({
      type: "NEW_EVENT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NEW_EVENT_FAIL",
      payload: error.response.data.message,
    });
  }
};
