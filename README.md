# Tyler's List API

This is the backend for the [Tyler's List app](https://github.com/tylersanderson/tylers-list).  It consists of Node, Express and Docker.

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [PostgreSQL](https://www.postgresql.org/) - Opens-source SQL database to store data
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Redis](https://redis.io/) - In memory database for JSON Web Tokens
- [Docker](https://www.docker.com/) - Development tool for creating, deploying and running applications using containers

## Features

- Authentication (login/register w/ username & password)
- Review/search all open gigs
- Take and post gigs
- Responsive UI

## Usage

#### Env variable:

Create a .env file in server directory and add the following:

```
JWTSIGN = "your JWT secret here"

```