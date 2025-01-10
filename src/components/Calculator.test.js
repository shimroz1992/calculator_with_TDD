import '@testing-library/jest-dom'; // Extends Jest's assertions to include DOM node assertions
import { render, screen, fireEvent } from "@testing-library/react"; // React testing utilities
import Calculator from "./Calculator"; // Importing the Calculator component for testing

/**
 * Test suite for the Calculator component.
 * Each test ensures the correctness of a specific functionality of the calculator.
 */
describe("Calculator", () => {
  
  /**
   * Test for addition functionality.
   * It simulates the user interaction for adding two numbers (1 + 2)
   * and checks if the displayed result is correct.
   */
  test("Addition functionality", () => {
    render(<Calculator />); // Render the Calculator component
    fireEvent.click(screen.getByText("1")); // Simulate clicking the "1" button
    fireEvent.click(screen.getByText("+")); // Simulate clicking the "+" button
    fireEvent.click(screen.getByText("2")); // Simulate clicking the "2" button
    fireEvent.click(screen.getByText("=")); // Simulate clicking the "=" button
    // Assert that the displayed result is "3"
    expect(screen.getByTestId("display")).toHaveTextContent("3");
  });

  /**
   * Test for subtraction functionality.
   * It simulates the user interaction for subtracting two numbers (5 - 3)
   * and verifies the displayed result.
   */
  test("Subtraction functionality", () => {
    render(<Calculator />); // Render the Calculator component
    fireEvent.click(screen.getByText("5")); // Simulate clicking the "5" button
    fireEvent.click(screen.getByText("-")); // Simulate clicking the "-" button
    fireEvent.click(screen.getByText("3")); // Simulate clicking the "3" button
    fireEvent.click(screen.getByText("=")); // Simulate clicking the "=" button
    // Assert that the displayed result is "2"
    expect(screen.getByTestId("display")).toHaveTextContent("2");
  });

  /**
   * Test for multiplication functionality.
   * It simulates the user interaction for multiplying two numbers (4 * 3)
   * and confirms the correctness of the result.
   */
  test("Multiplication functionality", () => {
    render(<Calculator />); // Render the Calculator component
    fireEvent.click(screen.getByText("4")); // Simulate clicking the "4" button
    fireEvent.click(screen.getByText("*")); // Simulate clicking the "*" button
    fireEvent.click(screen.getByText("3")); // Simulate clicking the "3" button
    fireEvent.click(screen.getByText("=")); // Simulate clicking the "=" button
    // Assert that the displayed result is "12"
    expect(screen.getByTestId("display")).toHaveTextContent("12");
  });
});
