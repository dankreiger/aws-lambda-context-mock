import { Context } from 'aws-lambda';

type AwsLambdaContextMock = () => Context;

export const cloudFrontRequestEventContextMock: AwsLambdaContextMock = (
  props = {}
): Context => ({
  callbackWaitsForEmptyEventLoop: false,
  functionName: 'viewer-request',
  functionVersion: '1234',
  invokedFunctionArn: 'fakearn',
  memoryLimitInMB: '5000',
  awsRequestId: '1234',
  logGroupName: 'groupname',
  logStreamName: 'streamname',
  identity: {
    cognitoIdentityId: '12345',
    cognitoIdentityPoolId: '45678',
  },
  clientContext: {
    client: {
      installationId: '123456',
      appTitle: 'app',
      appVersionName: 'v2',
      appVersionCode: '000',
      appPackageName: 'pkg',
    },
    Custom: { custom: '12345' },
    env: {
      platformVersion: '12345',
      platform: '12345',
      make: '12345',
      model: '12345',
      locale: 'de',
    },
  },
  getRemainingTimeInMillis: () => 500,
  done: (error?: Error, result?: any) => {},
  fail: (error: Error | string) => {},
  succeed: (messageOrObject: any) => {},
  ...props,
});
