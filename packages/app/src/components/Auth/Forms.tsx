import { LocationProps, RouteComponentProps, WindowLocation } from '@reach/router'
import { FieldProps, FormikProps } from 'formik'
import React from 'react'

import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox'

import { qParse } from '../../utils'
import { AuthTemplate } from './Template'
import { emailValidator, passwordValidator } from './validators'

export interface IAuthCommonProps extends RouteComponentProps {}

interface ISignInValues {
  email: string
  password: string
}

export const SignIn: React.SFC<IAuthCommonProps> = ({ location }) => {
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
      config: {
        forwardInQuery: ['email'],
      },
      props: {
        children: 'Forgot password?',
        to: 'forgot',
      },
    },
  })
}

export const Forgot: React.SFC<IAuthCommonProps> = ({ location }) => {
  return AuthTemplate({
    title: 'Get password reset code',
    desc: 'Please enter your email addres below and the password reset code will be sent to you.',
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
        },
      },
    ],
    cta: {
      children: 'Reset',
    },
    link: {
      config: {
        forwardInQuery: ['email'],
      },
      props: {
        children: 'Sign In instead',
        to: '../',
      },
    },
  })
}

export const Reset: React.SFC<IAuthCommonProps> = ({ location }) => {
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
      props: {
        children: 'Sign In instead',
        to: '../',
      },
    },
  })
}
