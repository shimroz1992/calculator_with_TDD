import { render, screen } from '@testing-library/react'; // Import necessary functions from testing-library/react
import App from './App'; // Import the App component to be tested

// Define a test case using the 'test' function
test('renders CALCULATOR heading', () => {
  // Render the App component into a virtual DOM
  render(<App />);
  
  // Find the heading element that contains the text 'CALCULATOR' (case-insensitive)
  const headElement = screen.getByText(/CALCULATOR/i);
  
  // Assert that the link element is present in the document
  expect(headElement).toBeInTheDocument();
});
