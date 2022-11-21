/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from 'styles/global-styles'

import { HomePage } from './pages/HomePage/Loadable'

import { useTranslation } from 'react-i18next'
import { Login } from './pages/Login/Loadable'
import { NotFoundPage } from './components/NotFoundPage'
import { useUserSlice } from 'store/app/user/slice'
import { useLanguageSlice } from 'store/app/LanguageSwitch/slice'
import HomePage0 from './pages/HomePage0'
import HomePage1 from './pages/HomePage1'
import HomePage2 from './pages/HomePage2'
import HomePage3 from './pages/HomePage3'

export function App() {
  const { i18n } = useTranslation()
  useUserSlice()
  useLanguageSlice()
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage0></HomePage0>}></Route>
          <Route path="/home1" element={<HomePage1></HomePage1>}></Route>
          <Route path="/home2" element={<HomePage2></HomePage2>}></Route>
          <Route path="/home3" element={<HomePage3></HomePage3>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
