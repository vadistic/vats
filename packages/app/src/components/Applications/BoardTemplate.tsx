import * as React from 'react'
import { Grid } from '../Grid'

export interface IApplicationsBoardTemplateProps {
  lists: JSX.Element[]
}

export const ApplicationsBoardTemplate: React.SFC<IApplicationsBoardTemplateProps> = ({
  lists,
}) => (
  <Grid.Section>
    {/* Possibly scrollable horizontally? */}
    <Grid.Container gridTemplateColumns={[`repeat(${lists.length}, minmax(200px, 1fr));`]}>
      {lists.map((list, i) => (
        <Grid.Item key={i} gridColumn={['span 1']}>
          {list}
        </Grid.Item>
      ))}
    </Grid.Container>
  </Grid.Section>
)
