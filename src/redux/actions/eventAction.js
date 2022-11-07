import axios from 'axios'

export const getEvents = () => async ( dispatch ) =>
{
  
  try {
    dispatch({
      type: 'ALL_EVENT_REQUESTS',
    })
    let link = `http://localhost:5000/api/v1/newEvents`
    const { data } = await axios.get(link)
    dispatch({
      type: 'ALL_EVENT_SUCCESS',
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: 'ALL_EVENT_FAIL',
      payload: error.response.data.message,
    })
  }
}


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: 'CLEAR_ERRORS' })
}

// / Delete event
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_EVENT_REQUEST' })
    const { data } = await axios.delete(
      `http://localhost:5000/api/v1/rejectEvent/${id}`,
   )
    dispatch({
      type: 'DELETE_EVENT_SUCCESS',
      payload: data.success,
    })
  } catch (error) {
    dispatch({
      type: 'DELETE_EVENT_FAIL',
      payload: error.response.data.message,
    })
  }
}