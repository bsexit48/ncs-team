# Boilerplate

## Typescript + React + React Native + GraphQL + Prisma

Comes with user authentication included

- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [Expo](https://www.expo.io)
- [TypeGraphQL](https://github.com/19majkel94/type-graphql)
- [Prisma](https://www.prisma.io)
- Web, App & API monorepo
- Next.js
- TypeScript
- Postgres
- Apollo Client
- Apollo Server
- Express
- React hook form
- Chakra UI
- Customizable theme & Dark mode
- Eslint
- Prettier
- Graphql Code Generator
- Sendgrid SMTP
- Sentry
- Husky
- Lint staged

& many more tasty treats

## Get Started

**Must have node, yarn, postgres and redis installed and setup locally**

Delete whatever packages you don't need for the project, e.g. maybe you don't need the React Native app

1. `yarn install`
2. `cd packages/api && yarn db:migrate` => create your DB
3. `yarn db:seed` => Insert Ignition Data to DB

Make sure you have created a .env file in the api package with the right values, you can use .env.example as the template

We use Husky to run a couple of checks each commit (prettier, eslint & commitlint), make sure to add a
.huskyrc file to your home directory ~/.huskyrc, and add this in:

```bash
export PATH="/usr/local/bin:$PATH"
```

then run

```bash
npx husky install
```

## Development
### API database preparation
- Clone `env.example` to `.env`
- Config DATABASE_URL in `.env` your local Mysql 8.0 configuration

1. `yarn install`
2. `cd packages/api && yarn db:migrate`
3. `yarn db:seed`

### Development cli

1.  API
    1.1 DB Mysql Config and Run:
    MySQL version 8.x installation
    .env File: Update DATABASE_URL=mysql://user:password@server:port/SchemaName?useUnicode=yes&characterEncoding=UTF-8

    1.2 Rabbit MQ config and Run
    Install Rabbit MQ
    Add User, Password, Authentication
    Add plugin for UI Management
    Go to UI Management, update Virtual Hosts
    Go to .evn file, update related RabbitMQ parameters:
    AMQP_URL=localhost
    AMQP_EXCHANGE=exchange
    AMQP_INDEXER_QUEUE=contract-events.all
    AMQP_METADATA_QUEUE=metadata-events.all
    AMQP_USERNAME=userName
    AMQP_PASSWORD=password
    AMQP_VHOST=/ (your Virtual Host Name)

        Error Helper Link: https://stackoverflow.com/questions/48497046/node-js-connection-failing-on-connecting-to-rabbitmq

    1.3 Run API `cd packages/api && yarn watch`

2.  `cd packages/web && yarn dev`
3.  `cd packages/app && yarn start`

## Production

### Mailers

- Create a Sendgrid account and set a SENDGRID_API_KEY environment variable in .env
- Create templates for each email you want to send and use the templateId in the corresponding mailer class

### Error tracing

- Create a Sentry account + project for each package and add the DSN to the web config and the api env variables

### Deployment

An example is deployed [here](https://boilerplate.noquarter.co)

We are using Heroku for the API package and Vercel for the WEB package
