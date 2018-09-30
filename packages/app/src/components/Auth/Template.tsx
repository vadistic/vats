import { css } from 'emotion'
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik'
import * as R from 'ramda'
import * as React from 'react'

import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'
import { ITextFieldProps, TextField } from 'office-ui-fabric-react/lib/TextField'

import { Box } from '..'
import { qStringify } from '../../utils'
import { ILinkButtonProps, LinkButton } from '../LinkButton'

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

interface IAuthTemplateForm {
  config: {
    initial: string | boolean
    validate?: (value: any) => string | Promise<void> | undefined
  }
  props: { name: string } & ITextFieldProps
}

interface IAuthTemplateMisc {
  config: {
    initial: string | boolean
    validate?: (value: any) => string | Promise<void> | undefined
  }
  props: { name: string }
  render: (fieldProps: FieldProps) => JSX.Element
}

interface IAuthTemplateLink {
  config?: {
    forwardInQuery: string[]
  }
  props: ILinkButtonProps
}

interface IAuthTemplateProps {
  title: string
  desc?: any
  form: IAuthTemplateForm[]
  misc?: IAuthTemplateMisc[]
  cta: IButtonProps
  error?: any
  link: IAuthTemplateLink
}

export const AuthTemplate: React.SFC<IAuthTemplateProps> = props => {
  const _getInitialValues = (arr: Array<IAuthTemplateForm | IAuthTemplateMisc>) =>
    arr.reduce((acc, field) => R.assoc(field.props.name, field.config.initial, acc), {})

  const _getComposedValidators = (arr: Array<IAuthTemplateForm | IAuthTemplateMisc>) => values => {
    const errors = arr.reduce((acc, { config: { validate }, props: { name } }) => {
      const res = validate && validate(values[name])
      return res ? R.assoc(name, res, acc) : acc
    }, {})
    return R.keys(errors).length ? errors : undefined
  }

  const _getFieldErrorMerssage = (formik: FormikProps<object>, name: string) =>
    formik.touched[name] && formik.errors[name]

  const _addValuesToQueryString = (formik: FormikProps<object>, link?: IAuthTemplateLink) =>
    link &&
    link.props.to +
      `${link.config && qStringify(R.pick(link.config.forwardInQuery, formik.values))}`

  return (
    <Formik
      initialValues={_getInitialValues([...props.form, ...(props.misc ? props.misc : [])])}
      validateOnChange={true}
      validateOnBlur={true}
      validate={_getComposedValidators(props.form)}
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
                      render={({ field }: FieldProps) => (
                        <TextField
                          {...{
                            underlined: true,
                            name,
                            type,
                            errorMessage: _getFieldErrorMerssage(formik, name),
                            ...rest,
                            ...field,
                          }}
                        />
                      )}
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
                  to={_addValuesToQueryString(formik, props.link)}
                  children={props.link.props.children}
                />
              </Box>
            </Box>
          </Form>
        </Box>
      )}
    />
  )
}
