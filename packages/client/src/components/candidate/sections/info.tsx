import { Icon, IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { useIntl } from '../../../i18n'
import { getLoLeafPath } from '../../../utils'
import { Box } from '../../box'
import { DisplayFieldArray, DisplayTextField } from '../../display'
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

const propToIconMap = {
  phones: 'Phone',
  emails: 'Mail',
  links: 'Link',
}

const FieldsGroup: React.FC<IFieldsGroupProps> = ({ propName }) => {
  const { intl } = useIntl()
  const { value: candidate } = useCandidateContext()

  return (
    <DisplayFieldArray<CandidateValue> name={getLoLeafPath(candidate, propName)}>
      {({ values: _candidate, handleRemove, handlePush, editable }) => {
        const listIsEmpty = _candidate[propName].length === 0
        const lastElIsNotEmpty = _candidate[propName].slice(-1)[0]

        const renderRemoveButton = (index: number) => () =>
          editable ? (
            <IconButton iconProps={{ iconName: 'Remove' }} onClick={handleRemove(index)} />
          ) : null

        return (
          <>
            <Box direction="row">
              <FieldsGroupLabel
                iconName={propToIconMap[propName]}
                label={intl({ count: 3 }, 'candidate', propName)}
              >
                {editable && (listIsEmpty || lastElIsNotEmpty) && (
                  <IconButton iconProps={{ iconName: 'Add' }} onClick={handlePush('')} />
                )}
              </FieldsGroupLabel>
            </Box>
            {_candidate[propName].map((_, i) => (
              <DisplayTextField
                key={propName + '_' + i}
                fontSize="medium"
                name={getLoLeafPath(candidate, propName, i)}
                placeholder={intl({ count: 1 }, 'candidate', propName)}
                onRenderSuffix={renderRemoveButton(i)}
              />
            ))}
          </>
        )
      }}
    </DisplayFieldArray>
  )
}

export const InfoSection: React.FC = () => {
  return (
    <Box css={theme => ({ width: theme.sizes.ml })}>
      <FieldsGroup propName="phones" />
      <FieldsGroup propName="emails" />
      <FieldsGroup propName="links" />
    </Box>
  )
}
