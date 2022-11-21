import { Button } from '@mantine/core'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAction } from 'store/app/user/slice'
import { selectUser } from 'store/app/user/slice/selector'

export function ButtonAuth() {
  const navigate = useNavigate()

  const { t } = useTranslation()
  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  const handleNavigate = () => {
    if (user) {
      dispatch(useAction.logout())
    } else {
      navigate('/login')
    }
  }
  return (
    <>
      <Button onClick={handleNavigate} variant="default">
        {user ? 'Logout' : t('login')}
      </Button>
    </>
  )
}
