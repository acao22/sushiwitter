# Sushiwitter
A front and back end implementation of Twitter based on my cat Sushi!

## Overview
Sushiwitter is a full-stack web application that is inspired by Twitter, except it's dedicated to my cat. Users can input their usernames and sushitweet; when they press "send sushitweet", the platform displays their name, current sushitweet and timestamp, and all previous sushitweets saved under their name via a backend database. 

On the frontend, I utilized HTML to create various components such as text areas, inputs/outputs, and images, styling them with CSS for an appealing user experience. The backend is powered by AWS, featuring an API gateway responsible for handling API requests and routing them to corresponding Lambda (backend server) functions. The Lambda function reads and writes to a DynamoDB database, where all user profiles and tweets are securely stored and retrieved. Finally, the project is deployed using AWS Amplify. The full-stack architecture links the frontend framework (HTML and JavaScript) with the backend (Node) through API requests managed by the API gateway, ensuring a smooth user experience. The project is deployed using AWS Amplify.

## Features
Sushiwitter includes the following web application features:

- **Frontend Components:** Created using HTML and styled with CSS, including text areas, inputs, outputs, and images.

- **Backend API calls:** Managed via an AWS API Gateway, which handles all API requests and routes them to the appropriate Lambda (backend server) function.

- **Backend Integration with Database:** Utilizes DynamoDB to store and retrieve user profiles and tweets on the backend database. When a username and tweet is submitted on the frontend website, it will automatically be remembered in the backend database.

- **Full-stack Integration:** Combined HTML and JavaScript on the frontend with Node on the backend, linked together by the API gatewayg and Lambda functions.

- **Deployment:** Hosted on AWS Amplify, a web hosting service, under the app name "sushiweb".

## Time Spent
I spent about 4-5 hours developing Sushiwitter.

## Demo
**Deployment Link:** https://dev.ddjyjy2ogste8.amplifyapp.com 

**Demo Video:** https://youtu.be/lJ1ADgTeWAc 
This video demos more in-depth the backend that I did (API gateway, server functions, databases) so please check it out!

Thank you for reading!!
