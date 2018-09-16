import { css } from 'emotion'
import { Location as ILocation } from 'history'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox'
import { ITextFieldProps, TextField } from 'office-ui-fabric-react/lib/TextField'
import * as React from 'react'
import { Form, Toggle } from 'react-powerplug'
import { Box, LinkButton, Tile } from '.'
import { auth, IMatch, tempAuth } from '../utils'

// auto-import guard
interface IFormBaseProps {
  title: string
  forms: ITextFieldProps[]
  cta?: any
}

const tileStyles = {
  root: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
}

const boxStyles = {
  root: css`
    margin-top: 16px;
    margin-bottom: 16px;
  `,
}

export const AuthTemplate: React.SFC<IFormBaseProps> = ({ title, forms, cta, children }) => (
  <Tile styles={tileStyles}>
    <h1>{title}</h1>
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <Box styles={boxStyles}>
        {forms.map((form, i) => (
          <TextField underlined={true} deferredValidationTime={2000} key={i} {...form} />
        ))}
      </Box>
      <Box styles={boxStyles}>{children}</Box>
    </form>
    {cta}
  </Tile>
)

export interface IFormProps {
  location: ILocation<any>
  match: IMatch<any>
}

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const onGetErrorEmail = (value: string): string => {
  return value && !emailRegExp.test(value) ? `Please enter correct email address.` : ''
}

const onGetErrorPassword = (value: string): string => {
  return value && value.length < 10 ? `The password is too short.` : ''
}

const SignIn: React.SFC<IFormProps> = ({ match, location }) => {
  const onSignIn = ({ email, password, cookies }) => {
    const _auth = cookies ? auth : tempAuth
  }

  const email = location.state.email || ''
  return (
    <Form initial={{ email, password: '' }}>
      {({ input, values }) => (
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <AuthTemplate
              title="Sign In"
              forms={[
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
              ]}
              cta={
                <DefaultButton
                  primary={true}
                  onClick={e => {
                    log(values)
                  }}
                >
                  Sign in
                </DefaultButton>
              }
            >
              <Box styles={{ root: { display: 'flex', justifyContent: 'space-between' } }}>
                <Checkbox label={'Stay signed in'} checked={on} onChange={toggle} />
                <LinkButton to={{ pathname: `${match.path}/reset`, state: { email: values.email } }}>
                  I forgot my Password
                </LinkButton>
              </Box>
            </AuthTemplate>
          )}
        </Toggle>
      )}
    </Form>
  )
}

const log = (val: any) => console.log(val)

const Reset: React.SFC<IFormProps> = ({ match, location }) => {
  const email = location.state.email || ''
  return (
    <Form initial={{ email }}>
      {({ input, values }) => (
        <AuthTemplate
          title="Reset password"
          forms={[
            {
              placeholder: 'Email',
              type: 'email',
              onGetErrorMessage: onGetErrorEmail,
              ...input('email').bind,
            },
          ]}
          cta={<DefaultButton primary={true}>Reset</DefaultButton>}
        >
          <Box styles={{ root: { display: 'flex', justifyContent: 'flex-end' } }}>
            <LinkButton to={{ pathname: `${match.path}`, state: { email: values.email } }}>
              Sign In instead
            </LinkButton>
          </Box>
        </AuthTemplate>
      )}
    </Form>
  )
}

export const Auth = {
  Reset,
  SignIn,
}
