export default function (state = [], action = {}) {
  switch (action.type) {
    case 'ITEMS_FETCHED':
      return action.payload
    default:
      return state
  }
}