import {SEND_REQUEST, SEND_REQUEST_FAILED, SEND_REQUEST_SUCCESS} from '../constants/TodosConstants'

const initialState = {
    todos: [],
    isLoading: false,
    error: null
}
const todosReducer = (state = initialState, action) =>{

    switch (action.type){
         case SEND_REQUEST:
            return {
              ...state,
              isLoading: true,
            }
         case SEND_REQUEST_SUCCESS:
            return {
                
              todos: action.payload,
              isLoading: false,
              error: null
            }
         case SEND_REQUEST_FAILED:
            return {
              todos:[],
              isLoading: false,
              error: action.payload
            }

          default:
        return state;
    }
}

export default  todosReducer;