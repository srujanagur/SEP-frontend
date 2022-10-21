import { combineReducers } from "redux";
import clientRequestReducer from "./clientRequestReducer";
import userReducer from "./userReducer";
import eventReducer from "./eventReducer";
import finReqReducer from "./finReqReducer";
import recReqReducer from "./recReqReducer";

const rootReducer = combineReducers({
  clientRequestReducer,
  eventReducer,
  finReqReducer,
  recReqReducer,
  userReducer,
});

export default rootReducer;
