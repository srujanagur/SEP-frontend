const initialState = {
  events: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_EVENT_REQUESTS": {
      return {
        ...state,
        loading: true,
        events: [],
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
export const newUserReducer = (state = { event: {} }, action) => {
  switch (action.type) {
    case "NEW_EVENT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "NEW_EVENT_SUCCESS":
      return {
        loading: false,
        success: action.payload.success,
        event: action.payload.event,
      };
    case "NEW_EVENT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "NEW_EVENT_RESET":
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
