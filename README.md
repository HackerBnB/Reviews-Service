# Vacay


> This project is intended to work as a full-stack microservice integrated with my team's microservices to form a complete Vacay single item page.



## Table of Contents

1.  [Usage](#Usage)
1.  [Requirements](#requirements)
1.  [Development](#development)

## Usage



## Technology stack

> A full stack react app built with the philosophy of continuously-integrated, test-driven development.

- CSS
- HTML5
- React.js
- Node.js
- Express
- PostgreSQL
- Redis


- Jest
- CircleCI

- Trello 

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node v8.10.0
- npm v3.5.2
- Postgres 

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Development

From within the root directory:

To seed database (seeded- not required)

```sh
npm db:seed
```

To run server

```sh
npm start
```

To run dev enviroment/webpack

```sh
npm run react-dev
```

To run tests

```sh
npm test
```

## CRUD API

GET /rooms/:id/reviews
POST /rooms/:id/reviews
PUT /rooms/:id/reviews
DELETE /rooms/:id/reviews