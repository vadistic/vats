// tslint:disable-next-line: no-submodule-imports
import 'cross-fetch/polyfill'

// tslint:disable-next-line: no-implicit-dependencies
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda'
import { CognitoIdentityServiceProvider } from 'aws-sdk'

// tslint:disable: no-console

// For ADMIN_NO_SRP_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), PASSWORD (required), DEVICE_KEY
const cognito = new CognitoIdentityServiceProvider({
  region: '',
}).adminInitiateAuth(
  {
    UserPoolId: '',
    ClientId: process.env.PROVISION_CLIENT_ID || '',
    AuthFlow: 'ADMIN_NO_SRP_AUTH',
    AuthParameters: {
      USERNAME: 'a',
      SECRET_HASH: '',
      PASSWORD: '',
      DEVICE_KEY: '',
    },
  },
  (err: any, data: any) => {
    console.log(data)
  },
)

export const create: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  }

  cb(null, response)
}
