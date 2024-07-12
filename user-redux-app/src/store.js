import { configureStore,} from '@reduxjs/toolkit'
import usersReducer from './store/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    
  },
})
