# Bookstore Backend

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone git@github.com:playolaizq/bookstore.git

cd bookstore/backend

npm install
```

First start your database locally in a container `bookstore` (NOTE: Docker daemon must be running):

```bash
npm run db:start

npm run db:verify
```

Then run the migrations to set up your database:

```bash
npm run db:migrate:dev
```

Finally you can start your server locally:

```bash
npm run dev
```

See http://localhost:3333/

## Code Quality

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

### Test

Run integration tests in a container `bookstore-tests`. First start the container and then run the tests:

```bash
npm run db:start

npm test
```

## Docs

See `docs` folder with a Postman JSON with an initial set up and examples for all the endpoints.

## Improvements

- Path aliases.
- Manage unexpected error in `ErrorHandler` middleware.
- Tests in CI.
- Tests coverage.
- Tests specific docker image.
- Use Prisma v5. Currently using v4 due to incompatibilities with Render.
