# Order Insights Dashboard

## Overview

Order Insights Dashboard is a modern React project built with Vite. The project follows industry-standard practices by clearly separating concerns and organizing code into modular components, pages, hooks, contexts, and assets. This structure makes the project scalable, maintainable, and easy to understand.

## Project Structure

```
hopeful-bartik/
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vercel.json
├── vite.config.ts
├── public/
│   └── data/
│       └── orders.json
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── Dec.svg
│   │       ├── IconSet.svg
│   │       ├── Inc.svg
│   │       ├── activities/
│   │       ├── dashboards/
│   │       ├── pages/
│   │       ├── table/
│   │       └── topBar/
│   ├── components/
│   │   ├── DonutChart/
│   │   │   └── DonutChart.jsx
│   │   └── ... other components
│   ├── context/
│   ├── data/
│   ├── hooks/
│   └── pages/
└── ... other configuration files
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [pnpm](https://pnpm.io/) package manager (or use npm/yarn if preferred)

### Installation

1. Install the dependencies:
   ```sh
   pnpm install
   ```

2. Start the development server:
   ```sh
   pnpm run dev
   ```

3. Build the project for production:
   ```sh
   pnpm run build
   ```

4. Preview the production build locally:
   ```sh
   pnpm run serve
   ```

## Available Scripts

- **pnpm run dev**: Starts the development server with hot-reloading.
- **pnpm run build**: Builds the project for production.
- **pnpm run serve**: Serves the production build locally.

## Design Decisions

This project was built using React and Vite for faster development and optimized build times. The choice to use Vite was driven by its performance benefits and modern development experience. The modular folder structure helps in maintaining a scalable and maintainable codebase.

### Recursive Left Navigation

The Left Navigation component employs a recursive function to render navigation items. This approach simplifies the addition and management of nested routes, making it easier to extend navigation considerably without deeply nested props. It enhances both maintainability and flexibility.

## Challenges and Improvements

- **Navigation and Prop Drilling**: While creating the functionality to navigate through the left and right bar, I encountered challenges with prop drilling. To overcome this, I implemented the Context API to pass data efficiently without deeply nested props.

- **Theme Management**: A dedicated context was created for theme management, centralizing control and making it easier to maintain a consistent flow. Additionally, a global CSS file with CSS variables was introduced to facilitate easy switching between themes.

- **Icon Theming**: I also faced challenges while dynamically changing the theme for icons, which required custom adjustments in their styling.

- **Improvements Made**: Refinements in the project structure, code modularization, and adherence to industry best practices have improved maintainability and performance. Future improvements may include enhanced testing, better documentation, and further optimization.

## Deployment

The application is deployed on Vercel. You can view it here: [Deployed Version](https://hopeful-bartik.vercel.app/ https://hopeful-bartik.vercel.app/order)

## Public GitHub Repository

A public GitHub repository has been created for this project. To set it up locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/hopeful-bartik.git
   ```
2. Navigate to the project directory:
   ```sh
   cd hopeful-bartik
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```
4. Start the development server:
   ```sh
   pnpm run dev
   ```

Feel free to contribute by forking the repository, making changes, and opening a pull request.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```sh
   git checkout -b feature/my-new-feature
   ```
3. Commit your changes and push the branch:
   ```sh
   git push origin feature/my-new-feature
   ```
4. Open a pull request detailing your changes.

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions, please open an issue or contact the maintainers.
