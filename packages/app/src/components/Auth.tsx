import { RouteComponentProps } from '@reach/router'
import { css } from 'emotion'
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox'
import { ITextFieldProps, TextField } from 'office-ui-fabric-react/lib/TextField'
import * as R from 'ramda'
import * as React from 'react'
import { Form, Toggle } from 'react-powerplug'
import { Box, Tile } from '.'
import { auth, qParse, qStringify, tempAuth } from '../utils'
import { LinkButton } from './LinkButton'

// auto-import guard
interface IFormBaseProps {
  title: string
  desc?: any
  forms: ITextFieldProps[]
  misc?: any
  cta: IButtonProps
  error?: any
  link: any
}

const tileStyles = {
  root: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    justify-content: space-between;
  `,
}

const boxStyles = {
  root: css`
    margin-top: 16px;
    margin-bottom: 16px;
  `,
}

const ctaStyles = {
  root: css`
    display: flex;
    flex-direction: column;
  `,
}

const linkStyles = {
  root: css`
    margin-top: 8px;
    align-self: flex-end;
  `,
}

export const AuthTemplate: React.SFC<IFormBaseProps> = props => (
  <Tile styles={tileStyles}>
    <Box>
      <h1>{props.title}</h1>
      <Box styles={boxStyles}>
        <p>{props.desc}</p>
        <p>{props.error}</p>
      </Box>
    </Box>

    <form>
      {props.forms.map((form, i) => (
        <TextField underlined={true} validateOnFocusOut={true} key={i} {...form} />
      ))}
      <Box styles={boxStyles}>
        {((props.misc || props.children) && props.misc) || props.children}
      </Box>
    </form>

    <Box styles={ctaStyles}>
      <DefaultButton type="submit" primary={true} {...props.cta} />
      <LinkButton {...props.link} />
    </Box>
  </Tile>
)

export interface IFormProps extends RouteComponentProps {}

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const onGetErrorEmail = (value: string): string => {
  return value && !emailRegExp.test(value) ? `Please enter valid email address.` : ''
}

const onGetErrorPassword = (value: string): string => {
  return value && value.length < 10 ? `The password is too short.` : ''
}

const SignIn: React.SFC<IFormProps> = ({ location }) => {
  const onSignIn = ({ email, password, cookies }) => {
    const _auth = cookies ? auth : tempAuth
  }

  const { email = '' } = R.merge(location!.state, qParse(location!.search))
  console.log(email)
  return (
    <Form initial={{ email, password: '' }}>
      {({ input, values }) => (
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <AuthTemplate
              {...{
                title: 'Sign In',
                forms: [
                  {
                    placeholder: 'Email',
                    type: 'email',
                    onGetErrorMessage: onGetErrorEmail,
                    autoComplete: 'on',
                    ...input('email').bind,
                  },
                  {
                    placeholder: 'Password',
                    type: 'password',
                    onGetErrorMessage: onGetErrorPassword,
                    autoComplete: 'on',
                    ...input('password').bind,
                  },
                ],
                cta: {
                  children: 'Sign In',
                },
                link: {
                  children: 'Forgot password?',
                  to: 'forgot' + qStringify({ email: values.email }),
                },
              }}
              misc={<Checkbox label={'Stay signed in'} checked={on} onChange={toggle} />}
            />
          )}
        </Toggle>
      )}
    </Form>
  )
}

const Forgot: React.SFC<IFormProps> = ({ location }) => {
  const { email = '' } = R.merge(location!.state, qParse(location!.search))
  console.log(email)

  return (
    <Form initial={{ email }}>
      {({ input, values }) => (
        <AuthTemplate
          {...{
            title: 'Get password reset code',
            desc:
              'Please enter your email addres below and the password reset code will be sent to you.',
            forms: [
              {
                placeholder: 'Email',
                type: 'email',
                onGetErrorMessage: onGetErrorEmail,
                ...input('email').bind,
              },
            ],
            cta: {
              children: 'Reset',
            },
            link: {
              children: 'Sign In instead',
              to: '../' + qStringify({ email: values.email }),
            },
          }}
        />
      )}
    </Form>
  )
}

const Reset: React.SFC<IFormProps> = () => {
  const email = ''
  const code = ''
  return (
    <Form initial={{ email, code, password: '' }}>
      {({ input, values }) => (
        <AuthTemplate
          {...{
            title: 'Set the new password',
            desc:
              'Please enter your email addres below and the password reset code will be sent to you.',
            forms: [
              {
                placeholder: 'Email',
                type: 'email',
                disabled: true,
                onGetErrorMessage: onGetErrorEmail,
                ...input('email').bind,
              },
              {
                placeholder: 'Code',
                type: 'text',
                onGetErrorMessage: onGetErrorEmail,
                ...input('code').bind,
              },
              {
                placeholder: 'Email',
                type: 'email',
                disabled: true,
                onGetErrorMessage: onGetErrorEmail,
                ...input('password').bind,
              },
            ],
            cta: {
              children: 'Reset',
            },
            link: {
              children: 'Sign In instead',
              to: '../' + qStringify({ email: values.email }),
            },
          }}
        />
      )}
    </Form>
  )
}

export const Auth = {
  Forgot,
  SignIn,
  Reset,
}
