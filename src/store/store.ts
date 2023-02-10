import { configureStore } from '@reduxjs/toolkit'
import { gedsysApi } from './apis/gedsysApi'
import { selectFieldSlice } from './form/selectFieldSlice';
import { postRequestSlice } from './form/postRequestSlice';
import { documentosCargadosSlice } from './form/documentosCargados';


export const store = configureStore({
  reducer: {
    postRequest: postRequestSlice.reducer,
    selectField:selectFieldSlice.reducer,
    documentosCargados:documentosCargadosSlice.reducer,
    [gedsysApi.reducerPath]: gedsysApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gedsysApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch