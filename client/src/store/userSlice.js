import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        name:'',
    },
    reducers:{
        addUserName: (state,action)=>{
            console.log("addusername",action);
            state.name = action.payload; 
        }
    }
});

export const {addUserName} = userSlice.actions;

export default userSlice.reducer;