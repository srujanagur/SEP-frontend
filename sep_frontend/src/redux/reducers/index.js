import { combineReducers } from "redux";
import { clientRequestReducer, clientReducer } from "./clientRequestReducer";
import { userReducer } from "./userReducer";
import { eventReducer, newEventReducer } from "./eventReducer";
import { finReqReducer, financeReducer } from "./finReqReducer";
import { recReqReducer, recruitementReducer } from "./recReqReducer";

const rootReducer = combineReducers({
  clientRequestReducer: clientRequestReducer,
  clientReducer: clientReducer,
  newEventReducer: newEventReducer,
  eventReducer: eventReducer,
  finReqReducer: finReqReducer,
  financeReducer: financeReducer,
  recReqReducer: recReqReducer,
  recruitementReducer: recruitementReducer,

  userReducer: userReducer,
});

export default rootReducer;
