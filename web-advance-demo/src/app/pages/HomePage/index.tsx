import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t, i18n } = useTranslation();

  const changLanguageButtonClicked = evt => {
    i18n.changeLanguage(evt);
  };

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>{t('text-btn')}</span>
      <button onClick={() => changLanguageButtonClicked('en')}>
        Click Change Language
      </button>
    </>
  );
}
