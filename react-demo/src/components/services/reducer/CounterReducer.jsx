import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstants"
const initialState = {
    count: 0
}

 const handleReducer = (state = initialState, action) =>{
    
        switch (action.type) {
            case INCREMENT:
                return {
                    ...state,
                    count: state.count + 1
                }
            case DECREMENT:
                return {
                    ...state,
                    count: state.count - 1
                }
            case RESET:
                return {
                    count: 0
                }

            default:
                return state;
        }
}

export default handleReducer;