import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'

import { LoginState } from './types'

export const initialState: LoginState = {
  user: false,
  username: '',
  loading: false,
  error: null,
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    loadRepos(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    changeUser(state, action: PayloadAction<boolean>) {
      state.user = action.payload
    },
  },
})

export const { actions: homepageActions, reducer } = slice
