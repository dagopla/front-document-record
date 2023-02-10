import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type initialState= {
    documentList: string[],
    documentosIdList:number[]
 }
 const initial:initialState={
    documentList:[''],
    documentosIdList:[]
 }
export const documentosCargadosSlice = createSlice({
   name: 'documentosCargados',
   initialState: initial,
   reducers: {
       setDocumentosCargados: (state, action:PayloadAction<string>) => {
           state.documentList =state.documentList.concat(action.payload);
       },
       setDocumentosCargadosIds:(state,action:PayloadAction<number>)=>{
            state.documentosIdList =state.documentosIdList.concat(action.payload);
       }
   }
});

// Action creators are generated for each case reducer function
export const { setDocumentosCargados,setDocumentosCargadosIds } = documentosCargadosSlice.actions;