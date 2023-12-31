# Bookstore Frontend

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone git@github.com:playolaizq/bookstore.git

cd bookstore/frontend

npm install

npm run dev
```

Then copy `.env.local.example` into `.env.local` and start the app:

```bash
cp .env.local.example .env.local

npm run dev
```

See http://localhost:5173/

## Code Quality

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

### Testing

```bash
npm run test

// or

npm run test:watch
```

### Coverage

```bash
npm run test:coverage
```

## Troubleshooting

- React Hook Form issue with form `handleSubmit` TypeScript.
  - Workaround: `<form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>`
  - [GitHub Issue](https://github.com/orgs/react-hook-form/discussions/8020#discussioncomment-3362300)

## Improvements

- Ant Design classes overrides: Avoid using `:global` - Investigate how to properly override Ant Design classes using CSS modules.
- Style unexpected error page and manage different errors, for example: Not found, Forbidden...
- Fill in missing translation keys.
- Routes handling between Private and Public - Improve how to retrieve the session user.

## Refernces

- https://vitejs.dev/guide/static-deploy.html
