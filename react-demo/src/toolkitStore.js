
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./components/services/reducer/CounterSlice";
import TodoReducer from './components/services/reducer/TodoSlice.jsx'

const store = configureStore({
    reducer:{
        counter:CounterReducer,
        todo: TodoReducer
    }
})

export default store;