import * as Cognito from 'amazon-cognito-identity-js'
import * as R from 'ramda'

// tslint:disable: no-console

const authenticationData: Cognito.IAuthenticationDetailsData = {
  Username: 'vadistic@gmail.com',
  Password: 'password1234',
}

const authenticationDetails = new Cognito.AuthenticationDetails(authenticationData)

const poolData: Cognito.ICognitoUserPoolData = {
  UserPoolId: 'eu-west-1_QB5d6ZO7S',
  ClientId: '7paip3rlrdmhktcoem3kmtn8ev',
}

const userPool = new Cognito.CognitoUserPool(poolData)

const cognitoUser = new Cognito.CognitoUser({
  Username: authenticationData.Username,
  Pool: userPool,
})

cognitoUser.authenticateUser(authenticationDetails, {
  onSuccess(result) {
    const accessToken = result.getAccessToken().getJwtToken()

    /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
    const idToken = result.getAccessToken().getJwtToken()
  },

  onFailure(err) {
    alert(err)
  },
})

const getJwtToken = () => {}

export const awsGraphqlFetch: GlobalFetch['fetch'] = (uri, options) => {
  if (cognitoUser != null) {
    cognitoUser.getSession((err, session) => {
      if (err) {
        alert(err)
        return
      }
      console.log('session validity: ' + session.isValid())
      return fetch(uri, R.assocPath(['headers', 'Authorization'], getJwtToken(), options))
    })
  } else {
    return fetch(uri, options)
  }
}
