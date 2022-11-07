import axios from 'axios'

export const getRecruiementRequests = () => async (dispatch) => {
  try {
    dispatch({
      type: 'ALL_RECRUIEMENT_REQUESTS',
    })
    let link = `http://localhost:5000/api/v1/recReqs`
    const { data } = await axios.get(link)
    dispatch({
      type: 'ALL_RECRUIEMENT_SUCCESS',
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: 'ALL_RECRUIEMENT_FAIL',
      payload: error.response.data.message,
    })
  }
}