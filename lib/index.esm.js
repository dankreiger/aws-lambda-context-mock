/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var cloudFrontRequestEventContextMock = function (props) {
    if (props === void 0) { props = {}; }
    return (__assign({ callbackWaitsForEmptyEventLoop: false, functionName: 'viewer-request', functionVersion: '1234', invokedFunctionArn: 'fakearn', memoryLimitInMB: '5000', awsRequestId: '1234', logGroupName: 'groupname', logStreamName: 'streamname', identity: {
            cognitoIdentityId: '12345',
            cognitoIdentityPoolId: '45678',
        }, clientContext: {
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
        }, getRemainingTimeInMillis: function () { return 500; }, done: function (error, result) { }, fail: function (error) { }, succeed: function (messageOrObject) { } }, props));
};

export { cloudFrontRequestEventContextMock };
