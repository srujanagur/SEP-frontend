export function approveEvent(event) {
  return {
    type: 'APPROVE',
    payload: { event },
  }
}

export function rejectEvent(event) {
  return {
    type: 'REJECT',
    payload: { event },
  }
}
