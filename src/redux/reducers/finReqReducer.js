const initialState = {
  finReqCount: 0,
  finRequests: [],
  loading: false,
  error: null,
}

export const finReqReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_FINANCIAL_REQUESTS': {
      return {
        ...state,
        loading: true,
        finRequests: [],
      }
    }
    case 'ALL_FINANCIAL_SUCCESS': {
      return {
        ...state,
        loading: false,
        finReqCount: action.payload.finReqCount,
        finRequests: action.payload.finRequests,
      }
    }
    case 'ALL_FINANCIAL_FAIL': {
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
