# Task Management FE Challenge

Initial setup of this project was made with [Vite](https://vitejs.dev/) and its `react-ts` template.

## To run project locally

- `npm i`
- `npm run dev`

## To run tests

- `npm i` (if this was not done before)
- `npm run test`

## Project

This is a React + TypeScript project designed for managing different tasks related to user profile creation.

### Structure

- **\_\_test\_\_/**: where all the tests are located
- **components/**: React components.
  - **ui/**: Basic and minor design system
  - **Widget/**: Where the widget is located
- **hooks/**: Hook created for `useFetchTasks`.
- **types/**: Basic type for most of the app types.
- **utils/**: Logic to be used around app.

## Testing

Used [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/).
