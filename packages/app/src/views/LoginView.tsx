import * as React from 'react'

import { Checkbox, DefaultButton, Link, TextField } from 'office-ui-fabric-react'

import { Grid, Tile } from '../components'

export interface ILoginViewProps {}

export const LoginView: React.SFC<ILoginViewProps> = () => (
  <>
    <Grid.Section background={'purpleDark'}>
      <Grid.Container height={'100vh'} gridTemplateRows={'1fr 1fr 1fr'}>
        <Grid.Item gridRow={'2 / span 1'} gridColumn={'5 / span 4'}>
          <Tile background={'themeLighter'}>
            <TextField placeholder={'Email'} />
            <TextField placeholder={'Password'} />
            <DefaultButton primary={true}>Login</DefaultButton>
            <Link>Forgot Password</Link>
            <Checkbox label="Standard checkbox" ariaDescribedBy={'descriptionID'} />
          </Tile>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </>
)
