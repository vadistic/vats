import * as React from 'react'

import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox'
import { TextField } from 'office-ui-fabric-react/lib/TextField'

import { Grid, Tile } from '../components'

export interface ILoginViewProps {}

export const LoginView: React.SFC<ILoginViewProps> = () => (
  <>
    <Grid.Section background={'purpleDark'}>
      <Grid.Container>
        <Grid.Item gridColumn={'4 / 8'}>
          <Tile background={'themeLighter'}>
            <TextField placeholder={'Email'} />
            <TextField placeholder={'Password'} />
            <DefaultButton primary={true}>Login</DefaultButton>
            <h3>Forgot Password</h3>
            <Checkbox label="Standard checkbox" ariaDescribedBy={'descriptionID'} />
          </Tile>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </>
)
