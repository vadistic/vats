import { css } from '@emotion/core'
import { Router as ReachRouter, RouterProps } from '@reach/router'
import React from 'react'

export const Router: React.FC<RouterProps> = props => {
  const styles = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  `

  return <ReachRouter css={styles} {...props} />
}
