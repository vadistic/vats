import React from 'react'

import { storiesOf, StoryDecorator } from '@storybook/react'

// @ts-ignore
// tslint:disable-next-line: no-submodule-imports
import { I18nProvider } from '../context'
import { useTranslation } from '../hook'

const withProvider: StoryDecorator = story => <I18nProvider>{story()}</I18nProvider>

const UseTranslate = () => {
  const { tp } = useTranslation()
  return (
    <div>
      <p>{tp.common.content({ postProcess: 'uppercase' })}</p>
      <p>{tp.candidate.firstName({ count: 2 })}</p>
    </div>
  )
}

storiesOf('i18n', module)
  .addDecorator(withProvider)
  .add('provider & path proxy', () => <UseTranslate />)
