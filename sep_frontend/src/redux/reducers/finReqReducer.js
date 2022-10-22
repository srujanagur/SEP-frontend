const initialState = {
  financialrequests: [],
  loading: false,
  error: null,
};

export const finReqReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_FINANCIAL_REQUESTS": {
      return {
        ...state,
        loading: true,
        financialrequests: [],
      };
    }
    case "ALL_FINANCIAL_SUCCESS": {
      return {
        ...state,
        loading: false,
        financialrequests: action.payload,
      };
    }
    case "ALL_FINANCIAL_FAIL": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case "CLEAR_ERRORS": {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};
export const financeReducer = (state = { financialrequest: {} }, action) => {
  switch (action.type) {
    case "NEW_FINANCIAL_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "NEW_FINANCIAL_SUCCESS":
      return {
        loading: false,
        success: action.payload.success,
        financialrequest: action.payload.financialrequest,
      };
    case "NEW_FINANCIAL_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "NEW_FINANCIAL_RESET":
      return {
        ...state,
        success: false,
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
