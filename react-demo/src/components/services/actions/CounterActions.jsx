import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstants"



export const handleIncrement = () =>{

    return {
        type:INCREMENT
    }
}
export const handleDecrement = () =>{

    return {
        type:DECREMENT
    }
}
export const handleReset = () =>{

    return {
        type:RESET
    }
}