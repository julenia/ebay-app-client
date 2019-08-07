import request from 'superagent'

export const ITEMS_FETCHED = 'ITEMS_FETCHED'

const baseUrl = 'http://localhost:4000'

const itemsFetched = items => ({
  type: ITEMS_FETCHED,
  payload: { items }
})

export const loadItems = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  //if (getState().items) return

  // a GET /events request

  request(`${baseUrl}/item`)
    .then(response => {
      console.log(response)
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(itemsFetched(response.body))
    })
    .catch(console.error)
}