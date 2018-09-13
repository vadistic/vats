import gql from 'graphql-tag'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import * as React from 'react'

import { Query } from 'react-apollo'
import { auth } from '..'

interface ICandidateViewProps {
  path: string
}

const singin = async () => {
  const tmp = auth.signIn('vadistic@gmail.com', 'password1234')
  console.log(await tmp)
}

const currentUser = async () => {
  const tmp = auth.currentAuthenticatedUser()
  console.log(await tmp)
}

const currentSession = async () => {
  const tmp = auth.currentSession()

  console.log(await tmp)
}

const currentUserPoolUser = async () => {
  const tmp = auth.currentUserPoolUser()
  console.log(await tmp)
}

const USERS = gql`
  query {
    users {
      id
    }
  }
`

export const LoginView: React.SFC<ICandidateViewProps> = () => (
  <Fabric>
    <h3> Login!</h3>

    <div>
      <DefaultButton onClick={singin}>SignIn</DefaultButton>
    </div>

    <div>
      <DefaultButton onClick={currentUser}>Current User</DefaultButton>
    </div>

    <div>
      <DefaultButton onClick={currentSession}>Current Session</DefaultButton>
    </div>

    <div>
      <DefaultButton onClick={currentUserPoolUser}>Current UserPool User</DefaultButton>
    </div>

    <DefaultButton primary={true}>I am a button.</DefaultButton>

    <div>
      <Query query={USERS}>
        {({ loading, error, data }) => {
          if (loading) {
            return 'Loading...'
          }
          if (error) {
            return `Error! ${error.message}`
          }

          return <h3>{JSON.stringify(data)}</h3>
        }}
      </Query>
    </div>

  </Fabric>
)
