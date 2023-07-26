import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        searchItem:"" ,
    },

    reducers: {
        modifySearchItem: (state,search) => {
            console.log("modify search",search);
           state.searchItem = search.payload;
        }
    }

})

export default appSlice.reducer;
export const {modifySearchItem } = appSlice.actions;