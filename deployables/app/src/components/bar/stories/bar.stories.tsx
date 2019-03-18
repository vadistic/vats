import { storiesOf } from '@storybook/react'
import { CommandBar } from 'office-ui-fabric-react'
import { StoriesFixture } from '../../../stories/fixture.stories'
import { useCommandBarItems } from '../bar'
import { renderBarCalloutButton } from '../callout'
import { SortCallout } from '../sort'

const BarFixture = () => {
  const { items } = useCommandBarItems(() => ({
    sort: {
      commandBarButtonAs: renderBarCalloutButton(() => (
        <SortCallout
          sortBy={'name'}
          sortDirection={1}
          items={[
            { key: 'name', type: 'string', name: 'Name' },
            { key: 'applications', type: 'number', name: 'Applications' },
            { key: 'createdAt', type: 'date', name: 'Add date' },
            { key: 'type', type: 'boolean', name: 'Archived' },
          ]}
          onSortChanged={({ sortBy, sortDirection }) => {
            console.log(sortBy, sortDirection)
          }}
        />
      )),
    },
  }))

  return <CommandBar items={items} />
}

storiesOf('bar', module)
  .addDecorator(story => <StoriesFixture>{story()}</StoriesFixture>)
  .add('basic', () => <BarFixture />)
