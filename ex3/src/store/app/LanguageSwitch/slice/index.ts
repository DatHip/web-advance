import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer } from 'redux-injectors'
import { getLocal } from 'utils/getLocal'

export const initialState = getLocal('language') || {
  language: 'eg',
}

const slice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    switch: (state, action) => {
      state.language = action.payload
      localStorage.setItem('language', JSON.stringify(state))
    },
  },
})

export const { actions: useActionLg, reducer } = slice

export const useLanguageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
}
