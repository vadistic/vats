import { RouteComponentProps } from '@reach/router'
import { css } from 'emotion'
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik'
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox'
import { ITextFieldProps, TextField } from 'office-ui-fabric-react/lib/TextField'
import * as R from 'ramda'
import * as React from 'react'
import { Box, Tile } from '.'
import { auth, qParse, qStringify, tempAuth } from '../utils'
import { LinkButton } from './LinkButton'

// auto-import guard

interface IFormTemplateConfigProps {
  initial: string | boolean
  validate?: (value: any) => string | Promise<void> | undefined
}

interface IFormTemplateProps {
  title: string
  desc?: any
  form: Array<{
    config: IFormTemplateConfigProps
    props: { name: string } & ITextFieldProps
  }>
  misc?: Array<{
    config: IFormTemplateConfigProps
    props: { name: string }
    render: (fieldProps: FieldProps) => JSX.Element
  }>
  cta: IButtonProps
  error?: any
  link: any
}

const tileStyles = {
  root: css`
    height: 100%;
  `,
}

const formStyles = css`
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  div:not(:first-child):not(:last-child) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

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

export const AuthTemplate: React.SFC<IFormTemplateProps> = props => (
  <Tile styles={tileStyles}>
    <Box as="legend">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <p>{props.error}</p>
    </Box>
    <Formik
      initialValues={[...props.form, ...(props.misc ? props.misc : [])].reduce(
        (acc, field) => R.assoc(field.props.name, field.config.initial, acc),
        {}
      )}
      validateOnChange={false}
      validateOnBlur={true}
      validate={values =>
        [...props.form, ...(props.misc ? props.misc : [])].reduce(
          (acc, field) =>
            R.assoc(
              name,
              field.config.validate && field.config.validate(values[field.props.name]),
              acc
            ),
          {}
        )
      }
      onSubmit={(values, actions) => {
        console.log('Values on submit', values, actions)
      }}
      render={({
        errors,
        initialValues,
        isSubmitting,
        isValidating,
        isValid,
        values,
      }: FormikProps<object>) => (
        <Form noValidate={true} className={formStyles}>
          <Box styles={boxStyles}>
            {props.form.map(({ props: { name, type, ...rest } }, i) => (
              <Field
                key={i}
                name={name}
                render={({ field }: FieldProps) =>
                  React.createElement(TextField, {
                    underlined: true,
                    name,
                    type,
                    errorMessage: errors[name],
                    ...rest,
                    ...field,
                  })}
              />
            ))}
          </Box>

          <Box styles={boxStyles}>
            {props.misc
              ? props.misc.map(({ render, props: { name } }, i) => (
                  <Field
                    key={i}
                    name={name}
                    render={(fieldProps: FieldProps) => render(fieldProps)}
                  />
                ))
              : undefined}
          </Box>

          {console.log('errors', errors)}
          {console.log('initialValues', initialValues)}
          {console.log('isSubmitting', isSubmitting)}
          {console.log('isValidating', isValidating)}
          {console.log('isValid', isValid)}
          {console.log('values', values)}

          <Box styles={ctaStyles}>
            <DefaultButton type="submit" primary={true} {...props.cta} />
            <LinkButton
              styles={linkStyles}
              to={props.link.to + qStringify(R.pick(['email', 'code'], values))}
              children={props.link.children}
            />
          </Box>
        </Form>
      )}
    />
  </Tile>
)

export interface IFormProps extends RouteComponentProps {}

const onGetErrorEmail = (value: string): string => {
  let errorMessage
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = 'Invalid email address'
  }
  console.log('validation happened', errorMessage)
  return errorMessage
}

const onGetErrorPassword = (value: string): string => {
  return value && value.length < 10 ? `The password is too short.` : ''
}

const SignIn: React.SFC<IFormProps> = ({ location }) => {
  const onSignIn = ({ email, password, cookies }) => {
    const _auth = cookies ? auth : tempAuth
  }

  return AuthTemplate({
    title: 'Sign In',
    form: [
      {
        config: {
          initial: qParse(location!.search).email || '',
          validate: onGetErrorEmail,
        },
        props: {
          name: 'email',
          placeholder: 'Email',
          type: 'email',
          autoComplete: 'on',
        },
      },
      {
        config: {
          initial: '',
          validate: onGetErrorPassword,
        },
        props: {
          name: 'password',
          placeholder: 'Password',
          type: 'password',
          autoComplete: 'on',
        },
      },
    ],
    misc: [
      {
        config: {
          initial: 'no',
        },
        props: {
          name: 'staySignedIn',
        },
        render: (field: FieldProps) => (
          <Checkbox
            label="my label"
            name="staySignedIn"
            onChange={(e, checked) =>
              field.form.setFieldValue('staySignedIn', checked ? 'yes' : 'no')
            }
            checked={field.field.value === 'yes' ? true : false}
          />
        ),
      },
    ],
    cta: {
      children: 'Sign In',
    },
    link: {
      children: 'Forgot password?',
      to: 'forgot',
    },
  })
}

const Forgot: React.SFC<IFormProps> = ({ location }) => {
  const { email = '' } = qParse(location!.search)

  return AuthTemplate({
    title: 'Get password reset code',
    desc: 'Please enter your email addres below and the password reset code will be sent to you.',
    form: [
      {
        config: {
          initial: qParse(location!.search).email || '',
        },
        props: {
          name: 'email',
          placeholder: 'Email',
          type: 'email',
        },
      },
    ],
    cta: {
      children: 'Reset',
    },
    link: {
      children: 'Sign In instead',
      to: '../' + qStringify({ email: '' }),
    },
  })
}

const Reset: React.SFC<IFormProps> = () => {
  const email = ''
  const code = ''
  return AuthTemplate({
    title: 'Set the new password',
    desc: 'Please enter your email addres below and the password reset code will be sent to you.',
    form: [
      {
        config: {
          initial: qParse(location!.search).email || '',
        },
        props: {
          name: 'email',
          placeholder: 'Email',
          type: 'email',
          disabled: true,
        },
      },
      {
        config: {
          initial: '',
        },
        props: {
          name: 'code',
          placeholder: 'Code',
          type: 'text',
        },
      },
      {
        config: {
          initial: '',
        },
        props: {
          name: 'newPassword',
          placeholder: 'New password',
          type: 'password',
        },
      },
      {
        config: {
          initial: '',
        },
        props: {
          name: 'confirmNewPassword',
          placeholder: 'Confirm new password',
          type: 'password',
        },
      },
    ],
    cta: {
      children: 'Reset',
    },
    link: {
      children: 'Sign In instead',
      to: '../' + qStringify({ email: '' }),
    },
  })
}

export const Auth = {
  Forgot,
  SignIn,
  Reset,
}
