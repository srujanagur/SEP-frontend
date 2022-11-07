const initialState = {
  events: [],
  error: null,
  eventCount: 0,
}

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_EVENT_REQUESTS': {
      return {
        ...state,
        loading: true,
        events: [],
      }
    }
    case 'ALL_EVENT_SUCCESS': {
      return {
        ...state,
        loading: false,
        events: action.payload.events,
        eventCount: action.payload.eventCount
      }
    }
    case 'ALL_EVENT_FAIL': {
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
