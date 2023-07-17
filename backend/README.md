# Bookstore Backend

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone git@github.com:playolaizq/bookstore.git

cd bookstore/backend

npm install
```

Then start your database locally (NOTE: Docker daemon must be running):

```bash
npm run db:start

npm run db:verify
```

Finally you can start your server locally:

```bash
npm run dev
```

See http://localhost:3333/

## Improvements

- Manage unexpected error in `ErrorHandler` middleware.
