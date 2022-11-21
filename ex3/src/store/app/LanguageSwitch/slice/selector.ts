import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'

const selectDomain = state => state.language || initialState

export const selectLanguage = createSelector(
  [selectDomain],
  userSelector => userSelector.language,
)
