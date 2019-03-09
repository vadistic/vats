import { hostThunkHelpers } from '../../components'
import {
  JobActions,
  JobDispatch,
  JobGraphqlTyping,
  jobHostConfig,
  JobHostTyping,
  JobState,
  JobValue,
} from './host'

/*
 * THUNKS
 */

const jobThunkHelpers = hostThunkHelpers<JobHostTyping, JobGraphqlTyping>(jobHostConfig)

export const updateJob = (value: JobValue) => async (dispatch: JobDispatch, state: JobState) => {
  jobThunkHelpers.autoUpdate(state, value)
  dispatch(JobActions.setEditable(false))
}
