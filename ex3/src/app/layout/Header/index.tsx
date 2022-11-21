import React, { useState } from 'react'
import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  NativeSelect,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, useNavigate } from 'react-router-dom'
import { NavbarLeft } from '../Navbar/Loadable'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/app/user/slice/selector'

const useStyles = createStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

export function HeaderNav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const { classes } = useStyles()
  const [value, setValue] = useState('en')
  const user = useSelector(selectUser)

  const navigate = useNavigate()

  const { t, i18n } = useTranslation()

  const handleNavigate = () => {
    if (!user) navigate('/login')
  }

  const handleChangeValue = e => {
    setValue(e.currentTarget.label)
    i18n.changeLanguage(e.currentTarget.value)
  }

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to={'/'} className={classes.link}>
              Home
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button onClick={handleNavigate} variant="default">
              {user ? 'Logout' : t('login')}
            </Button>
            <NativeSelect
              sx={{
                display: 'flex',
                marginLeft: '10px',
                alignItems: 'center',
                gap: '8px',
              }}
              value={value}
              label={t('language')}
              onChange={handleChangeValue}
              data={[
                { value: 'en', label: t('en') },
                { value: 'fr', label: t('fr') },
                { value: 'vn', label: t('vn') },
              ]}
            ></NativeSelect>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <NavbarLeft isBody={false}></NavbarLeft>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
