import { combineReducers } from "redux";
import course from "./course";
import authReducer from "./../../containers/AdminTemplate/Auth/modules/reducer";
import addUserReducer from "./../../containers/AdminTemplate/AddUser/modules/reducer"
const reducer = combineReducers({
  // literal object
  course,
  authReducer,
  addUserReducer
}); 

export default reducer;
