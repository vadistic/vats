import { AuthClass, CookieStorage } from '@aws-amplify/auth'

type TNonNullableStorage = Storage & {
  getItem: (key: string) => string
}

export const cookieAuth = new AuthClass({
  userPoolId: 'eu-west-1_QB5d6ZO7S',
  userPoolWebClientId: process.env.APP_CLIENT_ID as string,
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
export const sessionAuth = new AuthClass({
  userPoolId: 'eu-west-1_QB5d6ZO7S',
  userPoolWebClientId: process.env.APP_CLIENT_ID as string,
  authenticationFlowType: 'USER_SRP_AUTH',
  // https://github.com/aws-amplify/amplify-js/issues/740
  identityPoolId: 'bug',
  region: 'eu-west-1',
  mandatorySignIn: false,
  storage: sessionStorage as TNonNullableStorage,
})
