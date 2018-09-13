// based on this: https://aws.amazon.com/blogs/mobile/integrating-amazon-cognito-user-pools-with-api-gateway/
// this: https://auth0.com/docs/quickstart/backend/nodejs#validate-access-tokens
// and this: https://github.com/auth0/node-jwks-rsa

// tslint:disable: no-console
import * as jwt from 'jsonwebtoken'
import * as JwksRsa from 'jwks-rsa'

const iss =
  `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/` + process.env.COGNITO_POOL_ID

const client = JwksRsa({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 1,
  jwksUri: `${iss}/.well-known/jwks.json`,
  strictSsl: true,
})

export const validateToken = (token: string) => {
  const decodedJwt = jwt.decode(token, { complete: true })

  // Fail if the token is not jwt
  if (!decodedJwt) {
    console.log('Not a valid JWT token')
    throw new Error('Unauthorized')
  }

  // just typeguard
  if (typeof decodedJwt === 'string') {
    console.log('Wow')
    throw new Error('Unauthorized')
  }

  // Fail if token is not from your User Pool
  if (decodedJwt.payload.iss !== iss) {
    console.log('invalid issuer')
    throw new Error('Unauthorized')
  }

  // Reject the jwt if it's not an 'ID Token'
  if (decodedJwt.payload.token_use !== 'id') {
    console.log('Not an id token')
    throw new Error('Unauthorized')
  }

  // Get the kid from the token and retrieve corresponding PEM
  const kid = decodedJwt.header.kid

  client.getSigningKey(kid, (err, { rsaPublicKey }) => {
    if (err) {
      console.log('Invalid kid')
      throw new Error('Unauthorized')
    }

    if (!rsaPublicKey) {
      console.log('Invalid access token')
      throw new Error('Unauthorized')
    }

    // Verify the signature of the JWT token to ensure it's really coming from your User Pool
    jwt.verify(token, rsaPublicKey, { issuer: iss }, (_err, payload) => {
      if (_err) {
        throw new Error('Unauthorized')
      } else {
        // Valid token!
        console.log(payload)
        return payload
      }
    })
  })
}
