import {FETCHED_DETAILED_PRODUCT, UPDATE_PRODUCT} from '../actions/products'

export default function (state = null, action) {
  switch (action.type) {
    case FETCHED_DETAILED_PRODUCT:
      return action.payload

    case UPDATE_PRODUCT:
	  if (action.payload.id === state.id) {
	    return action.payload
	  }
	  else return state

    default:
      return state
  }
}