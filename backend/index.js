// Include the AWS SDK module
const AWS = require('aws-sdk');

let dynamodb = new AWS.DynamoDB.DocumentClient();

let date = new Date();
let now = date.toISOString();

exports.handler = async (event) => {
    let name = JSON.stringify(`${event.name}`);
    let getParams = {
        TableName:'tweetdb',
        Key: {
            'ID': name
        }
    };
    let result = await dynamodb.get(getParams).promise();
    console.log(result);
        let tweet = JSON.stringify(`${event.tweet}`);
    let allTweets =  '' ;
    if (result && result.Item) {
        allTweets = result.Item.Tweets + '\n' + now + ' ' + tweet;
    } else {
        allTweets =  now + ' ' + tweet;
    }
    let putParams = {
        TableName:'tweetdb',
        Item: {
            'ID': name,
            'Tweets' : allTweets
        }
    };

    await dynamodb.put(putParams).promise();
    
    const response = {
        statusCode: 200,
        body: allTweets
    };
    // Return the response constant
    return response;
};