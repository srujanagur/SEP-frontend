const initialState = {
    recReqCount:0,
    recReqs: [],
    loading: false,
    error: null,
  };
  
  export const recReqReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ALL_RECRUIEMENT_REQUESTS": {
        return {
          ...state,
          loading: true,
          recReqs: [],
        };
      }
      case "ALL_RECRUIEMENT_SUCCESS": {
        return {
          ...state,
          loading: false,
          recReqCount:action.payload.recReqCount,
          recReqs: action.payload.recReqs,
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
