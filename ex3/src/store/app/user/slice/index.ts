import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import { UserState } from './types'
import useUserFromSaga from './saga'
import { getLocal } from 'utils/getLocal'

export const initialState: UserState = getLocal('users') || {
  user: false,
  loading: false,
  username: '',
  password: '',
  id: 0,
}

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (
      state: UserState,
      action: {
        payload: {
          username: string,
          password: string,
        },
      },
    ) => {
      state.loading = true
    },
    loginSuccess(state: UserState, action: { payload: UserState }) {
      state.loading = false
      state.user = true
      state.username = action.payload.username
      state.password = action.payload.password
      state.id = action.payload.id
      localStorage.setItem('users', JSON.stringify(state))
    },
    loginFail: (state: UserState) => {
      state.loading = false
    },
    logout: state => {
      state.user = false
      state.username = ''
      state.password = ''
      state.id = 0
    },
  },
})

export const { actions: useAction, reducer } = slice

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: useUserFromSaga })
  return { actions: slice.actions }
}
