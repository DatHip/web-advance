import * as React from 'react'
import { AppShell, Container } from '@mantine/core'
import { FooterBasic } from 'app/layout/Footer'
import { HeaderNav } from 'app/layout/Header/Loadable'
import { NavbarLeft } from 'app/layout/Navbar/Loadable'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

const linkFooter = [
  {
    label: 'Contact',
    link: 'Contact',
  },
  {
    label: 'Privacy',
    link: 'Privacy',
  },
  {
    label: 'Blog',
    link: 'Blog',
  },
  {
    label: 'Careers',
    link: 'Careers',
  },
]

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <AppShell
        header={<HeaderNav></HeaderNav>}
        navbar={<NavbarLeft isBody={true}></NavbarLeft>}
        footer={<FooterBasic links={linkFooter}></FooterBasic>}
      >
        <Container style={{ height: '100%' }}>
          <Outlet></Outlet>
        </Container>
      </AppShell>
    </>
  )
}
