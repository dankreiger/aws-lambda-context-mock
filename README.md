# AWS Lambda Context Mock

Docs: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html

> When Lambda runs your function, it passes a context object to the handler. This object provides methods and properties that provide information about the invocation, function, and execution environment.

## Usage

```js
import { awsLambdaContextMock } from 'aws-lambda-context-mock';

//... default mock
test(`handler redirects uri to '/index.html'`, () => {
  // invoke lambda handler
  handler(event, awsLambdaContextMock(), cb);
  /// ...
});

//... custom, mock
test(`handler redirects uri to '/index.html'`, () => {
  // invoke lambda handler
  handler(
    event,
    awsLambdaContextMock({ callbackWaitsForEmptyEventLoop: true }),
    cb
  );
  /// ...
});
```

***

## Context methods (with mock defaults)

| Name                     | Type           | Default     | Description                                                            |
| :----------------------- | :------------- | :---------- | :--------------------------------------------------------------------- |
| getRemainingTimeInMillis | `() => number` | `() => 500` | Returns the number of milliseconds left before the execution times out |

## Context properties

| Name                           | Type              | Default                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                  |
| :----------------------------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getRemainingTimeInMillis       | `() => number`    | `() => 500`                                                                                                                                                                                                                                                                   | Returns the number of milliseconds left before the execution times out                                                                                                                                                                                       |
| functionName                   | `string`          | `viewer-request`                                                                                                                                                                                                                                                              | The name of the Lambda function.                                                                                                                                                                                                                             |
| functionVersion                | `string`          | `1234`                                                                                                                                                                                                                                                                        | The version of the function.                                                                                                                                                                                                                                 |
| invokedFunctionArn             | `string`          | `fakearn`                                                                                                                                                                                                                                                                     | The Amazon Resource Name (ARN) that's used to invoke the function. Indicates if the invoker specified a version number or alias.                                                                                                                             |
| memoryLimitInMB                | `string`          | `5000`                                                                                                                                                                                                                                                                        | The amount of memory that's allocated for the function.                                                                                                                                                                                                      |
| awsRequestId                   | `string`          | `1234`                                                                                                                                                                                                                                                                        | The identifier of the invocation request.                                                                                                                                                                                                                    |
| logGroupName                   | `string`          | `groupname`                                                                                                                                                                                                                                                                   | The log group for the function.                                                                                                                                                                                                                              |
| logStreamName                  | `string`          | `streamname`                                                                                                                                                                                                                                                                  | The log stream for the function instance.                                                                                                                                                                                                                    |
| identity                       | `CognitoIdentity` | `{ cognitoIdentityId: '12345', cognitoIdentityPoolId: '45678' }`                                                                                                                                                                                                              | (mobile apps) Information about the Amazon Cognito identity that authorized the request. <br>`cognitoIdentityId` - The authenticated Amazon Cognito identity. <br>`cognitoIdentityPoolId` - The Amazon Cognito identity pool that authorized the invocation. |
| clientContext                  | `ClientContext`   | `{"clientContext":{"client":{"installationId":"123456","appTitle":"app","appVersionName":"v2","appVersionCode":"000","appPackageName":"pkg"},"Custom":{"custom":"12345"},"env":{"platformVersion":"12345","platform":"12345","make":"12345","model":"12345","locale":"de"}}}` | (mobile apps) Client context that's provided to Lambda by the client application.                                                                                                                                                                            |
| callbackWaitsForEmptyEventLoop | `boolean`         | `false`                                                                                                                                                                                                                                                                       | Set to false to send the response right away when the callback executes, instead of waiting for the Node.js event loop to be empty. If this is false, any outstanding events continue to run during the next invocation.                                     |

### Embedded types

```ts
export interface CognitoIdentity {
  cognitoIdentityId: string;
  cognitoIdentityPoolId: string;
}

export interface ClientContext {
  client: ClientContextClient;
  Custom?: any;
  env: ClientContextEnv;
}

export interface ClientContextClient {
  installationId: string;
  appTitle: string;
  appVersionName: string;
  appVersionCode: string;
  appPackageName: string;
}

export interface ClientContextEnv {
  platformVersion: string;
  platform: string;
  make: string;
  model: string;
  locale: string;
}
```
