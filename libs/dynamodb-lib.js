import AWS from "aws-sdk";

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    AWS.config.update({ region: "ap-southeast-2" });
  return dynamoDb[action](params).promise();
}
