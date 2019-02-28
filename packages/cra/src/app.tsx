import { css } from '@emotion/core'
import React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { hot, setConfig } from 'react-hot-loader'

import './app.css'

const Component: React.FC = () => (
  <div
    css={css`
      color: hotpink;
    `}
  >
    Component
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.. works? Even faster?
          </p>
          <Component />
        </header>
      </div>
    )
  }
}

setConfig({
  ignoreSFC: true,
  pureRender: true,
})

export default hot(module)(App)
