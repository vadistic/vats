import { storiesOf } from '@storybook/react'
import { useStore } from '@vats/store'
import { useMemo } from 'react'
import { StoriesFixture } from '../../../stories/fixture.stories'
import { ApplicationsBoard } from '../board'
import { ApplicationsContext, createAplicationsStore } from '../store'

const BoardFixture: React.FC = () => {
  const store = useStore(createAplicationsStore, {})

  useMemo(() => {
    store.variables.where = {
      job: {
        workflow: {
          name: 'Default workflow',
        },
      },
    }

    store.state.keepSorted = false
  }, [])

  return (
    <ApplicationsContext.Provider value={store}>
      <ApplicationsBoard />
    </ApplicationsContext.Provider>
  )
}

storiesOf('applications board', module)
  .addDecorator(story => <StoriesFixture>{story()}</StoriesFixture>)
  .add('main', () => <BoardFixture />)
