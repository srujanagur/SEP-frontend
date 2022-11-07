const initialState = {
  approvedEvents: [],
  rejectedEvents: [],
}
export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APPROVE':
      const { approvedEvent } = action.payload
      return {
        ...state,
        approvedEvents: [...state.approvedEvents, approvedEvent],
      }
    case 'REJECT':
      const { rejectedEvent } = action.payload
      return {
        ...state,
        rejectedEvents: [...state.approvedEvents, rejectedEvent],
      }
    default:
      return state
  }
}
