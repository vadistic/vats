import { Form } from 'formik'
import { IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { useIntl } from '../../i18n'
import { getLoLeafPath } from '../../utils'
import { DisplayTextField, Editable, MultilineDisplayTextField } from '../editable'
import { HostActionType } from '../host'
import { JobContext, useJobContext } from './host'
import { JobActionType } from './reducer'

const EditButton: React.FC = () => {
  const { state, dispatch } = useJobContext()

  const toggleEdit = () => {
    dispatch({ type: JobActionType.Edit })
  }

  if (state.local.editable) {
    return <IconButton iconProps={{ iconName: 'Save' }} type="submit" />
  } else {
    return <IconButton iconProps={{ iconName: 'Edit' }} onClick={toggleEdit} />
  }
}

export const JobProfile: React.FC = () => {
  const { dispatch, state, value: job } = useJobContext()
  const { intl } = useIntl()

  const handleSubmit = (values: object) => {
    dispatch({ type: JobActionType.Edit, editable: false })
    dispatch({ type: HostActionType.AutoUpdate, payload: values })
  }

  return (
    <Editable context={JobContext} onSubmit={handleSubmit} editable={state.local.editable}>
      <Form>
        <EditButton />
        <DisplayTextField
          fontSize="xLarge"
          name={getLoLeafPath(job, 'name')}
          placeholder={intl(undefined, 'job', 'name')}
        />
        <MultilineDisplayTextField
          name={getLoLeafPath(job, 'excerpt')}
          placeholder={intl(undefined, 'job', 'excerpt')}
          label={intl(undefined, 'job', 'excerpt')}
        />
        <MultilineDisplayTextField
          name={getLoLeafPath(job, 'companyDescription')}
          placeholder={intl(undefined, 'job', 'companyDescription')}
          label={intl(undefined, 'job', 'companyDescription')}
        />
        <MultilineDisplayTextField
          name={getLoLeafPath(job, 'description')}
          placeholder={intl(undefined, 'job', 'description')}
          label={intl(undefined, 'job', 'description')}
        />
        <MultilineDisplayTextField
          name={getLoLeafPath(job, 'requirements')}
          placeholder={intl(undefined, 'job', 'requirements')}
          label={intl(undefined, 'job', 'requirements')}
        />
      </Form>
    </Editable>
  )
}
