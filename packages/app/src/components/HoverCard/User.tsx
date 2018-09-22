import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'
import * as React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { State, StateProps, StateRender } from 'react-powerplug'

import {
  HoverCard,
  IExpandingCardProps,
  IHoverCardProps,
} from 'office-ui-fabric-react/lib/HoverCard'
import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'

import { PersonaUser } from '..'
import { AppError, FirstArgument } from '../../utils'
import { PersonaUserFragment } from '../Persona/generated/PersonaUserFragment'
import { HoverCardUserQuery, HoverCardUserQueryVariables } from './generated/HoverCardUserQuery'

import { hoverCardUserQuery } from './graphql'

export interface IUserHoverCardProps extends IHoverCardProps {
  user: PersonaUserFragment
}

export interface IUserHoverCardState {
  client: {
    loading: boolean
    errors: any[] | undefined
  }
  user: Partial<NonNullable<HoverCardUserQuery['user']>>
}

export const UserHoverCard: React.SFC<IUserHoverCardProps> = ({ user, ...rest }) => {
  const initialState: IUserHoverCardState = {
    client: {
      loading: false,
      errors: undefined,
    },
    user,
  }

  const onRenderCompactCard = (props: any): JSX.Element => {
    return (
      <div>
        <PersonaUser user={user} size={PersonaSize.size72} />
      </div>
    )
  }

  const deriveOnRenderExpandedCard = ({ user: _user, client }: IUserHoverCardState) => (
    props: any
  ): JSX.Element => {
    if (client.errors) {
      return <p>{client.errors.join('\n')}</p>
    }
    return (
      <div>
        <p>{_user.lastLogin}</p>
      </div>
    )
  }

  const getExpandingCardProps = (state: IUserHoverCardState): IExpandingCardProps => ({
    onRenderCompactCard,
    onRenderExpandedCard: deriveOnRenderExpandedCard(state),
    renderData: state,
  })

  const fetchData = (
    _this: FirstArgument<StateRender<IUserHoverCardState>>,
    client: ApolloClient<any>
  ) => async () => {
    _this.setState(prevState => ({ client: { ...prevState.client, loading: true } }))

    try {
      const { data, errors } = await client.query<HoverCardUserQuery, HoverCardUserQueryVariables>({
        query: hoverCardUserQuery,
        variables: { id: user.id },
      })

      console.log(data, errors)

      if (errors) {
        _this.setState(prevState => ({
          client: { ...prevState.client, errors, loading: false },
        }))
      }

      if (data && data.user == null) {
        const errorNotFound = new AppError({
          message: `User profile was not found`,
          code: 204,
          name: 'No Content',
        })

        _this.setState(prevState => ({
          client: {
            ...prevState.client,
            loading: false,
            errors: (prevState.client.errors || []).concat(errorNotFound),
          },
        }))
      }

      if (data && data.user != null) {
        _this.setState(prevState => ({
          // why typeguard does not work?
          user: data.user as NonNullable<typeof data.user>,
          client: { ...prevState.client, loading: false },
        }))
      }
    } catch (error) {
      // handling errors - let's see if this get's resolved:
      // https://github.com/apollographql/apollo-client/issues/3666
      _this.setState(prevState => ({
        client: {
          ...prevState.client,
          loading: false,
          errors: (prevState.client.errors || []).concat(error),
        },
      }))
    }

    // TODO: else => error user not found
  }

  return (
    <ApolloConsumer>
      {client => (
        <State initial={initialState}>
          {_this => (
            <HoverCard
              expandingCardProps={getExpandingCardProps(_this.state)}
              instantOpenOnClick={true}
              setInitialFocus={true}
              cardDismissDelay={200}
              cardOpenDelay={1000}
              expandedCardOpenDelay={500}
              onCardVisible={fetchData(_this, client)}
              {...rest}
            />
          )}
        </State>
      )}
    </ApolloConsumer>
  )
}
