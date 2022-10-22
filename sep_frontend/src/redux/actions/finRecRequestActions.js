import axios from "axios";

export const getFinancialRequests = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_FINANCIAL_REQUESTS",
    });
    let link = `http://localhost:5000/api/v1/FinancialRequests`;

    const { data } = await axios.get(link);
    console.log("actions" + data);
    dispatch({
      type: "ALL_FINANCIAL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_FINANCIAL_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const createFinancialRequest = (financialData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_FINANCIAL_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/newEvent`,
      financialData,
      config
    );
    dispatch({
      type: "NEW_FINANCIAL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NEW_FINANCIAL_FAIL",
      payload: error.response.data.message,
    });
  }
};
