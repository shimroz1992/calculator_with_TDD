# Instructions on how to run the project and the tests.

Calculator App This project is a calculator application built with React, adhering to TDD (Test-Driven Development) principles. It includes addition, subtraction, and multiplication functionalities with a simple UI. Built-in testing for core functionalities using Jest and React Testing Library.

Table of Contents Introduction Features Installation Usage Available Scripts Running Tests Project Structure Learn More Introduction This application was bootstrapped with Create React App.

Features Perform basic arithmetic operations: addition, subtraction, multiplication. User-friendly UI with responsive design. Built-in testing for core functionalities using Jest and React Testing Library. Installation Follow these steps to set up the project locally:

### Clone the repository:

clone repo: `https://github.com/shimroz1992/calculator_with_TDD.git` 
cd `calculator_with_TDD`   

Install dependencies:

`npm install` 

Start the development server:   

`npm run start`

npm start The app will run at http://localhost:3000.

### Usage The calculator interface includes:

Number buttons (0–9) Arithmetic operation buttons (+, -, *) Equal (=) button to compute results Clear (C) button to reset the calculator Use the on-screen buttons to perform calculations.

Available Scripts In the project directory, you can run:

npm start Runs the app in development mode. Open http://localhost:3000 in your browser to view the app.

npm test Launches the test runner in interactive watch mode. See the Running Tests section for more details.

npm run build Builds the app for production in the build folder. The production build is optimized for performance.

npm run eject Ejects the app configuration. Note: This operation is irreversible.

Running Tests This project uses Jest and React Testing Library for unit testing. To run the tests:

### Execute the command:

npm test Tests include:

Verification of addition, subtraction, and multiplication functionalities. Rendering of key UI elements. Example test file: calculator.test.js.
