import { css } from '@emotion/core'
import { hasKey } from '@vats/utils'
import React, { useState } from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { hot } from 'react-hot-loader'

interface ComponentProps {}

const Component: React.FC<ComponentProps> = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const styles = css`
    li {
      color: hotpink;
      text-align: left;
    }

    a {
      font-weight: bold;
      font-style: italic;

      &:hover {
        color: darkmagenta;
      }
    }
  `

  return (
    <div css={styles}>
      <h3>Checklist</h3>
      <ul>
        <li css={{ color: 'red' }}>Emotion babel plugin: {'{is this pink?}'}</li>
        <li>Monorepo deps: {hasKey({ a: 'a' }, 'a') && 'true'}</li>
        <li>
          <a onClick={increment}>State</a> hook persistance: {count}
        </li>
      </ul>
    </div>
  )
}

const headerStyles = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  code {
    text-align: center;
  }
`

const App: React.FC = () => {
  return (
    <div className="App">
      <header css={headerStyles}>
        <code>This is just some bare bones cra to debug deployment/scripting</code>
        <Component />
      </header>
    </div>
  )
}

export default hot(module)(App)
