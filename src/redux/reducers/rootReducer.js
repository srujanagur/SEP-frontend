import { combineReducers } from 'redux'
import { eventReducer } from './eventReducer'
import { finReqReducer } from './finReqReducer'
import { recReqReducer } from './recReqReducer'
import { clientRequestReducer } from './clientReqReducer'
import {eventsReducer} from './approveOrRejectReducer'

const rootReducer = combineReducers({
  eventReducer: eventReducer,
  finReqReducer: finReqReducer,
  recReqReducer: recReqReducer,
  clientRequestReducer: clientRequestReducer,
  eventsReducer:eventsReducer,
})

export default rootReducer
