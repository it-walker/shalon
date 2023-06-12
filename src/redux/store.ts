import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import appStateSlice from './features/appStateSlice'

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
