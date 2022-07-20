import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { employeeApi } from '../service/employee'


export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
    counter: counterReducer,
  },
})