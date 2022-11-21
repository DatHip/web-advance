import { NativeSelect } from '@mantine/core'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useActionLg } from 'store/app/LanguageSwitch/slice'
import { selectLanguage } from 'store/app/LanguageSwitch/slice/selector'

export function SelectLanguage() {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const language = useSelector(selectLanguage)
  const handleChangeValue = e => {
    dispatch(useActionLg.switch(e.currentTarget.value))
    i18n.changeLanguage(e.currentTarget.value)
  }

  return (
    <>
      <NativeSelect
        sx={{
          display: 'flex',
          marginLeft: '10px',
          alignItems: 'center',
          gap: '8px',
        }}
        value={language}
        label={t('language')}
        onChange={handleChangeValue}
        data={[
          { value: 'en', label: t('en') },
          { value: 'fr', label: t('fr') },
          { value: 'vn', label: t('vn') },
        ]}
      ></NativeSelect>
    </>
  )
}
