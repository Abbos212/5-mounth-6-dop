import { combineReducers, configureStore } from '@reduxjs/toolkit'

import postsReducers from './slices/postSlice'
import historyReducers from './slices/historySlice'

const rootReducers = combineReducers({ posts: postsReducers, history: historyReducers })

export const store = configureStore({ reducer: rootReducers })