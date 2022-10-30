
import axios from 'axios';
import {SEND_REQUEST, SEND_REQUEST_SUCCESS, SEND_REQUEST_FAILED} from '../constants/TodosConstants';

 const getAllTodo = () => async (dispatch) =>{
   dispatch({type: SEND_REQUEST});
   try {
     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
   dispatch({
    type: SEND_REQUEST_SUCCESS,
    payload: res.data
})
   } catch (error) {
    dispatch({
        type:SEND_REQUEST_FAILED,
        payload: error.message
    })
   }
  

}

export default getAllTodo;