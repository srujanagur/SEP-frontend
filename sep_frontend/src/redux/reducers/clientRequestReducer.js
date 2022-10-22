const initialState = {
  clientrequests: [],
  loading: false,
  error: null,
};

export const clientRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_CLIENT_REQUESTS": {
      return {
        ...state,
        loading: true,
        clientrequests: [],
      };
    }
    case "ALL_CLIENT_SUCCESS": {
      return {
        ...state,
        loading: false,
        clientrequests: action.payload,
      };
    }
    case "ALL_CLIENT_FAIL": {
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
export const clientReducer = (state = { clientrequest: {} }, action) => {
  switch (action.type) {
    case "NEW_CLIENT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "NEW_CLIENT_SUCCESS":
      return {
        loading: false,
        success: action.payload.success,
        clientrequest: action.payload.clientrequest,
      };
    case "NEW_CLIENT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "NEW_CLIENT_RESET":
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
