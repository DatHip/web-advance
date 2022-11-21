import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'

const selectDomain = state => state?.users || initialState

export const selectUsername = createSelector(
  [selectDomain],
  userSelector => userSelector.username,
)
export const selectUser = createSelector(
  [selectDomain],
  userSelector => userSelector.user,
)

export const selectLoading = createSelector(
  [selectDomain],
  userSelector => userSelector.loading,
)

export const selectError = createSelector(
  [selectDomain],
  userSelector => userSelector.error,
)
