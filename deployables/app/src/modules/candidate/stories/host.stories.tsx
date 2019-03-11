import { storiesOf } from '@storybook/react'

// tslint:disable-next-line: no-implicit-dependencies
import DevTools, { configureDevtool } from 'mobx-react-devtools'
import { observer, useObserver } from 'mobx-react-lite'
import { useContext } from 'react'
import { StoreProvider } from '../../../store'
import { StoriesFixture } from '../../../stories/fixture.stories'
import { CandidateContext, createCandidateStore } from '../store'

configureDevtool({
  logEnabled: true,
  updatesEnabled: true,
  graphEnabled: true,
})

const MobxFixture: React.FC = ({ children }) => (
  <StoriesFixture>
    <StoreProvider
      createStoreProps={{ id: 'cjsds1qxe56e70b64a4q69swa' }}
      createStore={createCandidateStore}
      context={CandidateContext}
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
      <Another />
    </MobxFixture>
  ))
  .add('query', () => (
    <MobxFixture>
      <Query />
      <Powered />
    </MobxFixture>
  ))

const Basic: React.FC = observer(() => {
  const { state } = useContext(CandidateContext)

  const toogleField = () => {
    state.field = !state.field
  }

  const toogleEditable = () => {
    state.editable = !state.editable
  }

  const setNumber = () => {
    state.num += 1
  }

  console.log('Basic rerendered')

  return (
    <div>
      <p>Editable {state.editable ? 'TRUE' : 'FALSE'}</p>
      <p>Field {state.field ? 'TRUE' : 'FALSE'}</p>
      <div>
        <button onClick={setNumber}>Increment</button>
        <button onClick={toogleField}>toogleField</button>
        <button onClick={toogleEditable}>toogleEditable</button>
      </div>
    </div>
  )
})

const Another: React.FC = () => {
  const { state } = useContext(CandidateContext)

  const toogleField = () => {
    state.field = !state.field
  }

  const setNumber = () => {
    state.num += 1
  }

  console.log('Another rerendered')

  return useObserver(() => (
    <div>
      <p>Num {state.num}</p>
      <p>Field {state.field ? 'TRUE' : 'FALSE'}</p>
      <div>
        <button onClick={toogleField}>toogleField</button>
        <button onClick={setNumber}>Increment</button>
      </div>
    </div>
  ))
}

const Powered = observer(() => {
  const store = useContext(CandidateContext)

  console.log('Powered rerendered')

  return (
    <div>
      <pre>Status {JSON.stringify(store.data, null, 2)}</pre>
    </div>
  )
})

const Query = observer(() => {
  const store = useContext(CandidateContext)

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
