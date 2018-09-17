import { RouteComponentProps } from '@reach/router'
import { css } from 'emotion'
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik'
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'
import { ITextFieldProps, TextField } from 'office-ui-fabric-react/lib/TextField'
import * as R from 'ramda'
import * as React from 'react'
import { State, Value } from 'react-powerplug'
import { Box } from '.'
import { qParse, qStringify } from '../utils'
import { LinkButton } from './LinkButton'

// ashdsajhsad
const authTemplateStyles = ({ theme: t }: { theme: ITheme }) => ({
  root: css`
    height: 100%;
    padding: 24px;
    background: ${t.palette.white};

    & > form {
      height: 100%;
    }

    .auth-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .auth-legend {
    }

    .auth-form {
      & > div:not(:first-child):not(:last-child) {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }

    .auth-field {
      /* height of textfield + alert */
      min-height: 54px;
    }

    .auth-misc {
    }

    .auth-cta {
      display: flex;
      flex-direction: column;
    }

    .auth-link {
      margin-top: 8px;
      align-self: flex-end;
    }
  `,
})

interface IFormTemplateConfigProps {
  initial: string | boolean
  validate?: (value: any) => string | Promise<void> | undefined
}

interface IAuthTemplateProps {
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

export const AuthTemplate: React.SFC<IAuthTemplateProps> = props => (
      <Formik
        initialValues={[...props.form, ...(props.misc ? props.misc : [])].reduce(
          (acc, field) => R.assoc(field.props.name, field.config.initial, acc),
          {}
        )}
        validateOnChange={true}
        validateOnBlur={true}
        validate={values => {
          const errors = props.form.reduce((acc, { config: { validate }, props: { name } }) => {
            const res = validate && validate(values[name])
            return res ? R.assoc(name, res, acc) : acc
          }, {})
          return R.keys(errors).length ? errors : undefined
        }}
        onSubmit={(values, actions: FormikProps<any>) => {
          console.log(values, actions)

          setTimeout(() => {
            if (values.email !== 'test@test.com') {
              actions.setError('email is not test@test.com')
              actions.setFieldValue('password', '')
            }
          }, 1000)
        }}
        render={(formik: FormikProps<object>) => (
          <Box as="main" styles={authTemplateStyles}>
            <Form noValidate={true}>
              <Box className="auth-wrapper">
                <Box as="legend" className="auth-legend">
                  <h1>{props.title}</h1>

                  <p>{formik.isValid}</p>
                  <p>{formik.isValidating}</p>
                  <p>{props.desc}</p>
                  <p>{props.error}</p>

                  {formik.error && (
                    <MessageBar
                      messageBarType={MessageBarType.error}
                      isMultiline={false}
                      onDismiss={() => formik.setError(undefined)}
                      dismissButtonAriaLabel="Close"
                      children={formik.error}
                    />
                  )}
                </Box>
                <Box className="auth-form">
                  {props.form.map(({ props: { name, type, ...rest } }, i) => (
                    <Box key={i} className="auth-field">
                      <Field
                        name={name}
                        render={({ field }: FieldProps) =>
                          React.createElement(TextField, {
                            underlined: true,
                            name,
                            type,
                            errorMessage: formik.touched[name] && formik.errors[name],
                            ...rest,
                            ...field,
                          })}
                      />
                    </Box>
                  ))}
                  {props.misc
                    ? props.misc.map(({ render, props: { name } }, i) => (
                        <Box key={i} className="auth-misc">
                          <Field
                            name={name}
                            render={(fieldProps: FieldProps) => render(fieldProps)}
                          />
                        </Box>
                      ))
                    : undefined}
                </Box>
                <Box className="auth-cta">
                  <DefaultButton
                    type="submit"
                    primary={true}
                    disabled={!formik.isValid}
                    {...props.cta}
                  />
                  <LinkButton
                    className="auth-link"
                    to={props.link.to + qStringify(R.pick(['email', 'code'], formik.values))}
                    children={props.link.children}
                  />
                </Box>
              </Box>
            </Form>
          </Box>
        )}
      /
)

export interface ICommonAuthProps extends RouteComponentProps {}

const emailValidator = (value: string): string | undefined =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email addres' : undefined

const passwordValidator = (value: string): string | undefined =>
  value.length < 10 ? `The password is too short.` : undefined

interface ISignInValues {
  email: string
  password: string
}

const SignIn: React.SFC<ICommonAuthProps> = ({ location }) => {
  const onSubmit = (formikProps: FormikProps<ISignInValues>) => {
    return 'wooha'
  }

  return AuthTemplate({
    title: 'Sign In',
    form: [
      {
        config: {
          initial: qParse(location!.search).email || '',
          validate: emailValidator,
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
          validate: passwordValidator,
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
          validate: () => undefined,
        },
        props: {
          name: 'staySignedIn',
        },
        render: (field: FieldProps) => (
          <Checkbox
            label="Stay signed in"
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

const Forgot: React.SFC<ICommonAuthProps> = ({ location }) => {
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

const Reset: React.SFC<ICommonAuthProps> = () => {
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
      to: '../',
    },
  })
}

export const Auth = {
  Forgot,
  SignIn,
  Reset,
}
