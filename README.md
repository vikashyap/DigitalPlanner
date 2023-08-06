This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To set up the project locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Use `npm run dev` to start the development server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Folder Structure

### App Folder Approach

We've adopted the "App folder" approach, where the main application code resides in an `App` folder. This approach offers several advantages:

- **Better Organization**: All related files are grouped together under the `App` folder, leading to a cleaner and more organized project structure.
- **Scalability**: As the project grows, it's easier to manage and find specific files.
- **Component Sharing**: Components, hooks, and types can be shared more effectively within the `App` folder.

Learn more about the [App folder approach](https://nextjs.org/docs/app/building-your-application/routing).

### Project Structure

- `App/Home`: Demonstrates how routing works within the App folder structure.
- `App/Pension-estimator`: Contains the `Layout.tsx`, which is shared among multiple pages for consistent layout.
- `components`: all application-generic components.
- `hooks`: Contains business logic of the application using custom hooks.
- `types`: Defines TypeScript types used throughout the application.
- `store`: Utilizes Zustand for lightweight state management. [Comparison with other state management libraries](https://www.npmjs.com/package/zustand). works way better the redux or recoil
- `lib`: Includes styled components and their functionality configurations. Extendable with Twin.micro. [Learn about Twin.micro](https://link-to-twin-micro).

### Libraries Used

- `flowbite-react`: Provides components for the UI. [Link to Flowbite-React](https://www.flowbite-react.com/).
- `react-hook-form`: Library for managing form state and validations. [Link to react-hook-form](https://react-hook-form.com/).
- `superstruct`: Enhances typing and validation for forms. [Link to superstruct](https://docs.superstructjs.org/).
- `recharts`: Used for creating charts within the application. [Link to Recharts](https://recharts.org/en-US).

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production-ready application.
- `npm start`: Starts the production server.
- `npm run lint`: Runs linting for code quality checks.

## Writing Tests

_TODO: Add information about writing test cases._

## Twin.macro Integration

_TODO: Explain how Twin.macro is integrated into the project._

## License

This project is licensed under the [MIT License](LICENSE).
