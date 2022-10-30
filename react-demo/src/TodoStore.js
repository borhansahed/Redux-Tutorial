import {applyMiddleware, createStore} from 'redux';
import todosReducer from './components/services/reducer/TodosReducer';
import thunk from 'redux-thunk';


 const store = createStore(todosReducer, applyMiddleware(thunk));
 
 
 export default store;