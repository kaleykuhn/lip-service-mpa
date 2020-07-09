import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import lipsticks from "./reducers/lipstick";

export default combineReducers({
   currentUser,
   lipsticks,
});
