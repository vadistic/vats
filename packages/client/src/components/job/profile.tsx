import { Form } from 'formik'
import { IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { useIntl } from '../../i18n'
import { pathProxy } from '../../utils'
import { Box } from '../box'
import { DisplayTextField } from '../display'
import { Editable } from '../editable'
import { JobActions, JobContext, JobValue, useJobContext } from './host'

const EditButton: React.FC = () => {
  const { state, dispatch } = useJobContext()

  const toggleEdit = () => {
    dispatch(JobActions.editable(!state.local.editable))
  }

  if (state.local.editable) {
    return <IconButton iconProps={{ iconName: 'Save' }} type="submit" />
  } else {
    return <IconButton iconProps={{ iconName: 'Edit' }} onClick={toggleEdit} />
  }
}

export const JobProfile: React.FC = () => {
  const { dispatch } = useJobContext()
  const { intl } = useIntl()
  const p = pathProxy<JobValue>()

  const handleSubmit = (values: JobValue) => {
    dispatch(JobActions.update(values))
    dispatch(JobActions.editable(false))
  }

  const contentPlaceholder = intl(undefined, 'helper', 'empty')

  return (
    <Editable context={JobContext} onSubmit={handleSubmit}>
      <Form>
        <Box>
          <EditButton />
          <DisplayTextField
            fontSize="xLarge"
            name={p.name.PATH}
            placeholder={intl(undefined, 'job', 'name')}
          />
          <DisplayTextField
            multiline={true}
            name={p.excerpt.PATH}
            placeholder={contentPlaceholder}
            label={intl(undefined, 'job', 'excerpt')}
          />
          <DisplayTextField
            multiline={true}
            name={p.companyDescription.PATH}
            placeholder={contentPlaceholder}
            label={intl(undefined, 'job', 'companyDescription')}
          />
          <DisplayTextField
            multiline={true}
            name={p.description.PATH}
            placeholder={contentPlaceholder}
            label={intl(undefined, 'job', 'description')}
          />
          <DisplayTextField
            multiline={true}
            name={p.requirements.PATH}
            placeholder={contentPlaceholder}
            label={intl(undefined, 'job', 'requirements')}
          />
        </Box>
      </Form>
    </Editable>
  )
}
