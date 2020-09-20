import { Context } from 'aws-lambda';
declare type AwsLambdaContextMock = (props?: Record<keyof Context, any>) => Context;
export declare const awsLambdaContextMock: AwsLambdaContextMock;
export default awsLambdaContextMock;
