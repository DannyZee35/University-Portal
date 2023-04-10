import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import courseService from "./courseService"


const initialState={

    courses:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}


// creating new course

export const create_Course = createAsyncThunk(
    "courses/create",
    async (courseData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
         return await courseService.create_Course(courseData, token
        );
    
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  

export const courseSlice = createSlice({
    name:'course',
    initialState,
    reducers:{
        reset:(state)=>initialState,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(create_Course.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(create_Course.fulfilled, (state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.courses.push(action.payload)
         })
         .addCase(create_Course.rejected, (state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
         })
    }
})

export const {reset} = courseSlice.actions
export default courseSlice.reducer
