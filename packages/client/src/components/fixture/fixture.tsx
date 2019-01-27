import { css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import React, { Suspense } from 'react'

export interface IFixtureProps extends RouteComponentProps {
  component: React.ComponentType<IFixtureLogProps>
  name: string
}

export interface IFixtureLogProps {
  log: (data: any) => void
}

const fixtureStyles = css`
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;

    height: 100%;
    justify-content: center;
  }
`

export const Fixture: React.FC<IFixtureProps> = ({
  component: Component,
  name
}) => {
  const log = (data: any) => {
    console.log(`Fixture (${name}): `, data)
  }
  if (Component) {
    return (
      <div css={fixtureStyles}>
        <h3>{name}</h3>
        <div>
          <Suspense fallback={<p>Loading...</p>}>
            <Component log={log} />
          </Suspense>
        </div>
      </div>
    )
  }
  return null
}
