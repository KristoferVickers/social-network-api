# social-network-api

## Table of Contents

- [License](#License)
- [Description](#Description)
- [Technology](#Technology)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Walkthrough Video](#Walkthrough-Video)
- [Screenshot](#Screenshot)
- [Contribution](#contribution)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
This project is licensed under MIT, for more information please visit [this website](https://opensource.org/licenses/MIT)


## Description:

Introducing a versatile API for a social network web application that allows users to express themselves by sharing thoughts, reacting to friends' content, and managing friend lists. This API ensures a smooth and secure user experience, supporting various content formats and interactive features. It's designed for easy integration, offering clear documentation for developers to enhance their social network platforms effortlessly.

## Technology:

Project is created with:

- Javascript
- Node.js
- Express.js
- MongoDB
- Mongoose

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

#### Walkthrough Video


