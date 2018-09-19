import { AuthClass, CookieStorage } from '@aws-amplify/auth'
import { ICognitoStorage } from 'amazon-cognito-identity-js'

export const auth = new AuthClass({
  userPoolId: 'eu-west-1_QB5d6ZO7S',
  userPoolWebClientId: '7paip3rlrdmhktcoem3kmtn8ev',
  authenticationFlowType: 'USER_SRP_AUTH',
  // https://github.com/aws-amplify/amplify-js/issues/740
  identityPoolId: 'bug',
  region: 'eu-west-1',
  mandatorySignIn: false,
  storage: new CookieStorage({
    domain: '.lvh.me',
    expires: 7,
    path: '/',
    secure: true,
  }),
})

// amphoteric Auth - without cookies
export const tempAuth = new AuthClass({
  userPoolId: 'eu-west-1_QB5d6ZO7S',
  userPoolWebClientId: '7paip3rlrdmhktcoem3kmtn8ev',
  authenticationFlowType: 'USER_SRP_AUTH',
  // https://github.com/aws-amplify/amplify-js/issues/740
  identityPoolId: 'bug',
  region: 'eu-west-1',
  mandatorySignIn: false,
  storage: sessionStorage as ICognitoStorage,
})