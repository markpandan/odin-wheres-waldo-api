# odin-wheres-waldo-api

This repository was made as an API for Where's Waldo Project: https://github.com/markpandan/odin-wheres-waldo

## Functionality

The API was made to send data for game images, entities, seeing and submission of high scores. The images were stored via [Cloudinary](https://cloudinary.com/) - a cloud storage platform.

## Installation

Clone this repository, and install the necessary modules by running this command in your command line that was relative to this file directory:

```
npm install
```

The database URI was stored under an [environment variable](https://en.wikipedia.org/wiki/Environment_variable) to secure the data, and integrity of the app. Therefore, a new [PostgreSQL](https://www.postgresql.org/) database must be configured.

To properly insert the [database URI](https://www.postgresql.org/docs/current/libpq-connect.html#:~:text=32.1.1.2.%C2%A0Connection%20URIs,%5B%26...%5D), you need to create an `.env` file with `DATABASE_URL` as the variable name.

```
DATABASE_URL = postgresql://[userspec@][hostspec][/dbname][?paramspec]

# where userspec is:
#   user[:password]

# and hostspec is:
#   [host][:port][,...]

# and paramspec is:
#   name=value[&...]
```

Once done build the respective tables based on the `schema.prisma` file by migrating it to your created database. The game images, and entities will be populated as well.

```
npm run build
```

The API should be properly configured by now. To run the app, execute the following line:

```
npm run server
```

## Components

This API repository utilizes the following libraries and/or APIs:

- [Express JS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
