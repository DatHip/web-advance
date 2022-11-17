import React, { useState } from 'react'
import { createStyles, Navbar } from '@mantine/core'
import {
  IconFingerprint,
  IconKey,
  IconReceipt2,
  IconLogin,
} from '@tabler/icons'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon')
  return {
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },

    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none ',
      },
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  }
})

const data = [
  { link: '', label: 'Home', icon: null },
  { link: '', label: 'Menu1', icon: IconReceipt2 },
  { link: '', label: 'Menu2', icon: IconFingerprint },
  { link: '', label: 'Menu3', icon: IconKey },
]

export function NavbarLeft({ isBody }) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Billing')

  const links = data.map(item => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={event => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      {item?.icon && <item.icon className={classes.linkIcon} stroke={1.5} />}
      <span>{item.label}</span>
    </a>
  ))

  return (
    <Navbar
      className={`${isBody ? classes.hiddenMobile : ''}`}
      width={{ sm: 300 }}
      p="md"
    >
      <Navbar.Section>{links}</Navbar.Section>
      <Navbar.Section className={classes.footer}>
        {!isBody && (
          <Link
            to={'/login'}
            className={classes.link}
            onClick={event => event.preventDefault()}
          >
            <IconLogin className={classes.linkIcon} stroke={1.5} />
            <span>Log In</span>
          </Link>
        )}
      </Navbar.Section>
    </Navbar>
  )
}
