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

const FieldsGroupLabel: React.FC<IGroupLabelProps> = ({ label, iconName }) => (
  <h4>
    {label}
    <Icon iconName={iconName} styles={{ root: { marginLeft: '0.5em' } }} />
  </h4>
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
          if (_candidate[propName].length === 0) {
            push('')
          }

          return (
            <>
              <Box direction="row">
                {editable && _candidate[propName].slice(-1) && (
                  <IconButton
                    iconProps={{ iconName: 'Add' }}
                    css={{ marginLeft: -32 }}
                    onClick={handlePush('')}
                  />
                )}
                <FieldsGroupLabel
                  iconName="Phone"
                  label={intl({ count: 3 }, 'candidate', propName)}
                />
              </Box>
              {_candidate[propName].map((_, i) => (
                <Box key={propName + '_' + i}>
                  <Box direction="row">
                    {editable && _candidate[propName][i] && (
                      <IconButton
                        iconProps={{ iconName: 'Remove' }}
                        css={{ marginLeft: -32 }}
                        onClick={handleRemove(i)}
                      />
                    )}
                    <DisplayTextField
                      key={'item_' + i}
                      fontSize="medium"
                      name={getLoLeafPath(candidate, propName, i)}
                      placeholder={intl({ count: 1 }, 'candidate', propName)}
                    />
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
