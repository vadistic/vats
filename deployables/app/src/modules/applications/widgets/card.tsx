import { usePartialSelector } from '@vats/store'
import { CandidatePersona, personaCandidateSelector } from '../../candidate'
import { ApplicationsElementProps } from '../store'

export const ApplicationCard: React.FC<ApplicationsElementProps> = ({ application }) => {
  const personaCandidate = usePartialSelector(personaCandidateSelector)(application.candidate)

  return (
    <div>
      <CandidatePersona candidate={personaCandidate} />
    </div>
  )
}
