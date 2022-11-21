import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import { UserState } from './types'
import useUserFromSaga from './saga'

const getLocal = (key: string) => {
  const storedValues = localStorage.getItem(key)
  if (!storedValues) {
    return null
  } else {
    return JSON.parse(storedValues)
  }
}

export const initialState: UserState = getLocal('user') || {
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
      localStorage.setItem('user', JSON.stringify(state))
    },
    loginFail: (state: UserState) => {
      state.loading = false
    },
  },
})

export const { actions: useAction, reducer } = slice

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: useUserFromSaga })
  return { actions: slice.actions }
}
