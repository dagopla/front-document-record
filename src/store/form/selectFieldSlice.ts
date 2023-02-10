import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const selectFieldSlice = createSlice({
    name: 'selectField',
    initialState: {
        idSelect: 0,
        fileNameSelect:'',
    },
    reducers: {
        setSelectField: (state, action:PayloadAction<number>) => {
            state.idSelect =action.payload ;
        },
        setfileNameSelect: (state, action:PayloadAction<string>) => {
            state.fileNameSelect =action.payload ;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setSelectField,setfileNameSelect} = selectFieldSlice.actions;