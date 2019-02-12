import { Icon, IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { useIntl } from '../../../i18n'
import { getLoLeafPath } from '../../../utils'
import { Box } from '../../box'
import { DisplayFieldArray, DisplayTextField } from '../../editable'
import { CandidateValue, useCandidateContext } from '../host'

interface IGroupLabelProps {
  iconName: string
  label: string
}

const FieldsGroupLabel: React.FC<IGroupLabelProps> = ({ label, iconName, children }) => (
  <Box direction="row" css={{ alignItems: 'center' }}>
    <h4>{label}</h4>
    <Icon iconName={iconName} styles={{ root: { marginLeft: '0.5em' } }} />
    {children}
  </Box>
)

interface IFieldsGroupProps {
  propName: 'phones' | 'emails' | 'links'
}

const FieldsGroup: React.FC<IFieldsGroupProps> = ({ propName }) => {
  const { intl } = useIntl()
  const { value: candidate } = useCandidateContext()

  return (
    <Box>
      <DisplayFieldArray<CandidateValue> name={getLoLeafPath(candidate, propName)}>
        {({ values: _candidate, push, handleRemove, handlePush, editable }) => {
          const listIsEmpty = _candidate[propName].length === 0
          const lastElIsNotEmpty = _candidate[propName].slice(-1)[0]

          return (
            <>
              <Box direction="row">
                <FieldsGroupLabel
                  iconName="Phone"
                  label={intl({ count: 3 }, 'candidate', propName)}
                >
                  {editable && (listIsEmpty || lastElIsNotEmpty) && (
                    <IconButton iconProps={{ iconName: 'Add' }} onClick={handlePush('')} />
                  )}
                </FieldsGroupLabel>
              </Box>
              {_candidate[propName].map((_, i) => (
                <Box key={propName + '_' + i}>
                  <Box direction="row">
                    <DisplayTextField
                      key={'item_' + i}
                      fontSize="medium"
                      name={getLoLeafPath(candidate, propName, i)}
                      placeholder={intl({ count: 1 }, 'candidate', propName)}
                    />
                    {editable && (
                      <IconButton iconProps={{ iconName: 'Remove' }} onClick={handleRemove(i)} />
                    )}
                  </Box>
                </Box>
              ))}
            </>
          )
        }}
      </DisplayFieldArray>
    </Box>
  )
}

export const InfoSection: React.FC = () => {
  const { intl } = useIntl()
  const { value: candidate } = useCandidateContext()

  return (
    <Box>
      <FieldsGroup propName="phones" />
      <FieldsGroup propName="emails" />
      <FieldsGroup propName="links" />
    </Box>
  )
}
