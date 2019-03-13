import { storiesOf } from '@storybook/react'
import { StoreProvider } from '@vats/store'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { createSingleCandidateStore, SingleCandidateContext } from '../modules/candidate'
import { StoriesFixture } from './fixture.stories'

// tslint:disable-next-line: no-implicit-dependencies
import DevTools, { configureDevtool } from 'mobx-react-devtools'

configureDevtool({
  logEnabled: true,
  updatesEnabled: true,
  graphEnabled: true,
})

const MobxFixture: React.FC = ({ children }) => (
  <StoriesFixture>
    <StoreProvider
      createStoreProps={{ id: 'cjsds1qxe56e70b64a4q69swa' }}
      createStore={createSingleCandidateStore}
      context={SingleCandidateContext}
    >
      {children}
    </StoreProvider>
    <DevTools />
  </StoriesFixture>
)

storiesOf('candidate store', module)
  .add('basic', () => (
    <MobxFixture>
      <Basic />
    </MobxFixture>
  ))
  .add('query', () => (
    <MobxFixture>
      <Query />
      <Powered />
    </MobxFixture>
  ))

const Basic: React.FC = observer(() => {
  const { state } = useContext(SingleCandidateContext)

  const toogleEditable = () => {
    state.editable = !state.editable
  }

  console.log('Basic rerendered')

  return (
    <div>
      <p>Editable {state.editable ? 'TRUE' : 'FALSE'}</p>
      <div>
        <button onClick={toogleEditable}>toogleEditable</button>
      </div>
    </div>
  )
})

const Powered = observer(() => {
  const store = useContext(SingleCandidateContext)

  console.log('Powered rerendered')

  return (
    <div>
      <pre>Status {JSON.stringify(store.data, null, 2)}</pre>
    </div>
  )
})

const Query = observer(() => {
  const store = useContext(SingleCandidateContext)

  const fetch = () => {
    store.fetch()
  }

  return (
    <div>
      <p>Status {store.meta.status}</p>
      <button onClick={fetch}>Fetch</button>
    </div>
  )
})
