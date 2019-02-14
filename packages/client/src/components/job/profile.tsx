import { Form } from 'formik'
import { IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { useIntl } from '../../i18n'
import { getLoLeafPath } from '../../utils'
import { Box } from '../box'
import { DisplayTextField, Editable, MultilineDisplayTextField } from '../editable'
import { JobActions, JobContext, JobValue, useJobContext } from './host'

const TestButton: React.FC = () => {
  const { state, dispatch } = useJobContext()

  const handleMagic = () => {
    dispatch(
      JobActions.customUpdate({
        excerpt: 'Hello',
      }),
    )
  }

  return <IconButton iconProps={{ iconName: 'Error' }} onClick={handleMagic} />
}

const EditButton: React.FC = () => {
  const { state, dispatch } = useJobContext()

  const toggleEdit = () => {
    dispatch(JobActions.edit(!state.local.editable))
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

  const handleSubmit = (values: JobValue) => {
    dispatch(JobActions.update(values))

    dispatch({
      type: 'UPDATE',
      payload: values,
    })

    dispatch(JobActions.edit(false))
  }

  const contentPlaceholder = intl(undefined, 'helper', 'empty')

  return (
    <Editable context={JobContext} onSubmit={handleSubmit} editable={state.local.editable}>
      <Form>
        <Box>
          <EditButton />
          <TestButton />
          <DisplayTextField
            fontSize="xLarge"
            name={getLoLeafPath(job, 'name')}
            placeholder={intl(undefined, 'job', 'name')}
          />
          <MultilineDisplayTextField
            name={getLoLeafPath(job, 'excerpt')}
            placeholder={contentPlaceholder}
            label={intl(undefined, 'job', 'excerpt')}
          />
          <MultilineDisplayTextField
            name={getLoLeafPath(job, 'companyDescription')}
            placeholder={contentPlaceholder}
            label={intl(undefined, 'job', 'companyDescription')}
          />
          <MultilineDisplayTextField
            name={getLoLeafPath(job, 'description')}
            placeholder={contentPlaceholder}
            label={intl(undefined, 'job', 'description')}
          />
          <MultilineDisplayTextField
            name={getLoLeafPath(job, 'requirements')}
            placeholder={contentPlaceholder}
            label={intl(undefined, 'job', 'requirements')}
          />
        </Box>
      </Form>
    </Editable>
  )
}
