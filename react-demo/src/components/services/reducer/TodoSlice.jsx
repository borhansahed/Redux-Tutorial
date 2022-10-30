import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData = createAsyncThunk("todo/fetchData", async() => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
})
const createTodoSlice = createSlice({
    name:'Posts',
    initialState:{
        todo:[],
        isLoading: false,
        error: null
    },
    extraReducers:(builder) =>{
      builder.addCase(fetchData.pending, (state) =>{
        state.isLoading = true;
      } )
      builder.addCase(fetchData.fulfilled, (state, action) =>{
        state.todo = action.payload;
        state.isLoading = false;
        state.error = null;
      } )
      builder.addCase(fetchData.rejected, (state, action) =>{
        
        state.isLoading = false;
        state.error = action.error.message;
      } )
    }
})

export default createTodoSlice.reducer;