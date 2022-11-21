import {
  ActionIcon,
  Button,
  Center,
  Container,
  createStyles,
  PasswordInput,
  Space,
  TextInput,
} from '@mantine/core'
import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { IconUser, IconPassword, IconEye } from '@tabler/icons'
import { useTranslation } from 'react-i18next'
import { useForm } from '@mantine/form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser, selectUsername } from 'store/app/user/slice/selector'
import { useUserSlice } from 'store/app/user/slice'

const useStyles = createStyles(theme => ({
  main: {
    minWidth: '280px',
    padding: '40px ',
    backgroundColor: 'white',
    borderRadius: '30px',
    width: '100%',
    maxWidth: '600px',
  },

  heading: {
    textAlign: 'center',
  },
}))
export function Login() {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

  const dispatach = useDispatch()
  const navigate = useNavigate()

  const { actions } = useUserSlice()
  const handleSubmit = value => {
    dispatach(
      actions.login({
        username: value.username,
        password: value.password,
      }),
    )
  }
  const user = useSelector(selectUser)
  React.useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  return user ? (
    <div></div>
  ) : (
    <>
      <Helmet>
        <title>{t('login')}</title>
      </Helmet>
      <div
        style={{
          minWidth: '280px',
          backgroundImage: "url('/bg01.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <Center style={{ height: '100%' }}>
            <div className={classes.main}>
              <h2 className={classes.heading}>{t('title')}</h2>
              <Space h={20}></Space>
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <div className="filed">
                  <TextInput
                    icon={
                      <ActionIcon>
                        <IconUser></IconUser>
                      </ActionIcon>
                    }
                    label={t('namePlaceHolder')}
                    variant="unstyled"
                    placeholder={t('namePlaceHolder')}
                    {...form.getInputProps('username')}
                  ></TextInput>
                </div>
                <Space h={20}></Space>
                <PasswordInput
                  mb={20}
                  icon={
                    <ActionIcon>
                      <IconPassword></IconPassword>
                    </ActionIcon>
                  }
                  label={t('password')}
                  variant="unstyled"
                  placeholder={t('password')}
                  rightSection={
                    <ActionIcon>
                      <IconEye points="true"></IconEye>
                    </ActionIcon>
                  }
                  {...form.getInputProps('password')}
                ></PasswordInput>
                <Button
                  sx={{
                    margin: '10px auto 30px auto ',
                    width: '90%',
                    fontSize: '20px',
                    fontWeight: 400,
                    display: 'block',
                  }}
                  mb={20}
                  size="sm"
                  radius="xl"
                  uppercase
                  type="submit"
                >
                  {t('login')}
                </Button>
              </form>
            </div>
          </Center>
        </Container>
      </div>
    </>
  )
}
