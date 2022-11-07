import axios from "axios";

export const getFinancialRequests = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_FINANCIAL_REQUESTS",
    });
    let link = `http://localhost:5000/api/v1/FinancialRequests`;

    const { data } = await axios.get(link);
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