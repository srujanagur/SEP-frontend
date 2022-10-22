import axios from "axios";

export const getRecruiementRequests = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_RECRUIEMENT_REQUESTS",
    });
    let link = `http://localhost:5000/api/v1/recReqs`;

    const { data } = await axios.get(link);
    console.log("recruiteactions" + data);
    console.log("recruiteactions1" + JSON.stringify(data));
    dispatch({
      type: "ALL_RECRUIEMENT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_RECRUIEMENT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const createEvent = (recruitementData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_RECRUIEMENT_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/newRecReq`,
      recruitementData,
      config
    );
    dispatch({
      type: "NEW_RECRUIEMENT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NEW_RECRUIEMENT_FAIL",
      payload: error.response.data.message,
    });
  }
};
