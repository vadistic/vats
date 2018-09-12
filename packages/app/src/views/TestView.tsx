import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import * as React from 'react'
import { Query } from 'react-apollo';


const GET_USERS = gql`

`

export const TestView = () => (
  <Fabric>
    <DefaultButton primary={true}>I am a button.</DefaultButton>

    <Query query={GET_DOGS}>
      {({ loading, error, data }) => {
        if (loading) { return 'Loading...' }
        if (error) { return `Error! ${error.message}` }

        return (
          <select name='dog' onChange={onDogSelected}>
            {data.dogs.map(dog => (
              <option key={dog.id} value={dog.breed}>
                {dog.breed}
              </option>
            ))}
          </select>
        )
      }}
    </Query>
  </Fabric>
)
