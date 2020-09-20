import { awsLambdaContextMock } from '../';

describe('tests', () => {
  it('todo', () => {
    expect(awsLambdaContextMock()).toEqual(
      expect.objectContaining({
        awsRequestId: '1234',
        callbackWaitsForEmptyEventLoop: false,
        clientContext: {
          Custom: { custom: '12345' },
          client: {
            appPackageName: 'pkg',
            appTitle: 'app',
            appVersionCode: '000',
            appVersionName: 'v2',
            installationId: '123456',
          },
          env: {
            locale: 'de',
            make: '12345',
            model: '12345',
            platform: '12345',
            platformVersion: '12345',
          },
        },
        functionName: 'viewer-request',
        functionVersion: '1234',
        identity: {
          cognitoIdentityId: '12345',
          cognitoIdentityPoolId: '45678',
        },
        invokedFunctionArn: 'fakearn',
        logGroupName: 'groupname',
        logStreamName: 'streamname',
        memoryLimitInMB: '5000',
      })
    );
  });
});
