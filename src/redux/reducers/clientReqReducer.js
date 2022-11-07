const initialState = {
  clientReqCount: 0,
  clientRequests: [],
  loading: false,
  error: null,
}

export const clientRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CLIENT_REQUESTS': {
      return {
        ...state,
        loading: true,
        clientRequests: [],
      }
    }
    case 'ALL_CLIENT_SUCCESS': {
      return {
        ...state,
        loading: false,
        clientReqCount: action.payload.clientReqCount,
        clientRequests: action.payload.clientRequests,
      }
    }
    case 'ALL_CLIENT_FAIL': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case 'CLEAR_ERRORS': {
      return {
        ...state,
        error: null,
      }
    }
    default:
      return state
  }
}
