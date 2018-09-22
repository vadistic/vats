import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'
import * as React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { State, StateRender } from 'react-powerplug'

import {
  HoverCard,
  IExpandingCardProps,
  IHoverCardProps,
} from 'office-ui-fabric-react/lib/HoverCard'
import { PersonaSize } from 'office-ui-fabric-react/lib/Persona'

import { PersonaCandidate } from '..'
import { AppError, FirstArgument } from '../../utils'
import { PersonaCandidateFragment } from '../Persona/generated/PersonaCandidateFragment'
import {
  HoverCardCandidateQuery,
  HoverCardCandidateQueryVariables,
} from './generated/HoverCardCandidateQuery'

import { hoverCardCandidateQuery } from './graphql'

export interface ICandidateHoverCardProps extends IHoverCardProps {
  candidate: PersonaCandidateFragment
}

export interface ICandidateHoverCardState {
  client: {
    loading: boolean
    errors: any[] | undefined
  }
  candidate: Partial<NonNullable<HoverCardCandidateQuery['candidate']>>
}

export const CandidateHoverCard: React.SFC<ICandidateHoverCardProps> = ({ candidate, ...rest }) => {
  const initialState: ICandidateHoverCardState = {
    client: {
      loading: false,
      errors: undefined,
    },
    candidate,
  }

  const onRenderCompactCard = (props: any): JSX.Element => {
    return (
      <div>
        <PersonaCandidate candidate={candidate} size={PersonaSize.size72} />
      </div>
    )
  }

  const deriveOnRenderExpandedCard = ({
    candidate: _candidate,
    client,
  }: ICandidateHoverCardState) => (props: any): JSX.Element => {
    if (client.errors) {
      return <p>{client.errors.join('\n')}</p>
    }
    return (
      <div>
        <p>{_candidate.emails && _candidate.emails.join(' ')}</p>
      </div>
    )
  }

  const getExpandingCardProps = (state: ICandidateHoverCardState): IExpandingCardProps => ({
    onRenderCompactCard,
    onRenderExpandedCard: deriveOnRenderExpandedCard(state),
    renderData: state,
  })

  const fetchData = (
    _this: FirstArgument<StateRender<ICandidateHoverCardState>>,
    client: ApolloClient<any>
  ) => async () => {
    _this.setState(prevState => ({ client: { ...prevState.client, loading: true } }))

    try {
      const { data, errors } = await client.query<
        HoverCardCandidateQuery,
        HoverCardCandidateQueryVariables
      >({
        query: hoverCardCandidateQuery,
        variables: { id: candidate.id },
      })

      console.log(data, errors)

      if (errors) {
        _this.setState(prevState => ({
          client: { ...prevState.client, errors, loading: false },
        }))
      }

      if (data && data.candidate == null) {
        const errorNotFound = new AppError({
          message: `Candidate profile was not found`,
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

      if (data && data.candidate != null) {
        _this.setState(prevState => ({
          // why typeguard does not work?
          candidate: data.candidate as NonNullable<typeof data.candidate>,
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

    // TODO: else => error candidate not found
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
