import { IPersonaProps, Persona } from 'office-ui-fabric-react/lib/Persona'
import gql from 'graphql-tag'

export interface IAvatarProps extends IPersonaProps {}

export const AvatarFragment = = gql`
  fragment Avatar on Candidate {
    
  }
`

export const Avatar: React.SFC<IAvatarProps> = props => {
  return <Persona />
}
