import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from './quotesSlice'
import { quotesApi } from './quotesApi'

export const store = configureStore({
  reducer: {
    quotesState: quotesReducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  niddleware: getDefault => getDefault().concat(
    quotesApi.middleware,
  ),
})
