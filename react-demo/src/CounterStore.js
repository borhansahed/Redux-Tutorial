import { createStore } from "redux";
import CounterReducer from "./components/services/reducer/CounterReducer"




 const store = createStore(CounterReducer)
 export default store