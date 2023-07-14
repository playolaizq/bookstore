# Bookstore Frontend

## Getting Started

```bash
git clone git@github.com:playolaizq/bookstore.git

cd bookstore/bookstore-frontend

npm install

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

npm run test-watch
```

### Coverage

```bash
npm run test-coverage
```

## Troubleshooting

- React Hook Form issue with form `handleSubmit` TypeScript.
  - Workaround: `<form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>`
  - [GitHub Issue](https://github.com/orgs/react-hook-form/discussions/8020#discussioncomment-3362300)

## Improvements

- Ant Design classes overrides: Avoid using global - Investigate how to properly override Ant Design classes using CSS modules.
