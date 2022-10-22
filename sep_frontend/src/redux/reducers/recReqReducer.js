const initialState = {
  recruitementrequests: [],
  loading: false,
  error: null,
};

export const recReqReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_RECRUIEMENT_REQUESTS": {
      return {
        ...state,
        loading: true,
        recruitementrequests: [],
      };
    }
    case "ALL_RECRUIEMENT_SUCCESS": {
      return {
        ...state,
        loading: false,
        recruitementrequests: action.payload,
      };
    }
    case "ALL_RECRUIEMENT_FAIL": {
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
export const recruitementReducer = (
  state = { recruiementData: {} },
  action
) => {
  switch (action.type) {
    case "NEW_RECRUIEMENT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "NEW_RECRUIEMENT_SUCCESS":
      return {
        loading: false,
        success: action.payload.success,
        recruiementData: action.payload.recruiementData,
      };
    case "NEW_RECRUIEMENT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "NEW_RECRUIEMENT_RESET":
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
