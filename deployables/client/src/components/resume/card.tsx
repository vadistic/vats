import { useTranslation } from '@vats/i18n'
import { mimeTypes } from '@vats/utils'
import {
  DocumentCard,
  DocumentCardActions,
  DocumentCardDetails,
  DocumentCardLogo,
  DocumentCardTitle,
  DocumentCardType,
  IButtonProps,
} from 'office-ui-fabric-react'
import React from 'react'
import { File } from '../../generated/queries'
import { useDayjs } from '../datetime'

export interface ResumeCardProps {
  type?: DocumentCardType
  resume: ResumeValue
}

export type ResumeValue = File

export const ResumeCard: React.FC<ResumeCardProps> = ({
  resume,
  type = DocumentCardType.compact,
}) => {
  const { tp } = useTranslation()

  const cardActions: IButtonProps[] = [
    {
      iconProps: { iconName: 'download' },
      type: 'button',
      href: resume.url,
      download: true,
      title: tp.action.download(),
    },
  ]

  const ext = mimeTypes[resume.type.toLowerCase()]

  const { dayjs } = useDayjs(resume.createdAt)

  return (
    <DocumentCard type={type}>
      <DocumentCardLogo logoIcon="pdf" />
      <DocumentCardDetails>
        <DocumentCardTitle title={resume.name + (ext ? '.' + ext : '')} shouldTruncate={true} />
        <DocumentCardTitle showAsSecondaryTitle={true} title={dayjs.fromNow()} />
        <DocumentCardActions actions={cardActions} />
      </DocumentCardDetails>
    </DocumentCard>
  )
}
