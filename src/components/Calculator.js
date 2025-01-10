import "../App.css";
import React, { useState } from "react";

const Calculator = () => {
  // State variables
  const [displayValue, setDisplayValue] = useState("0"); // Holds the current value displayed on the screen
  const [firstOperand, setFirstOperand] = useState(null); // Stores the first operand for calculations
  const [operator, setOperator] = useState(null); // Stores the current operator (+, -, *)
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false); // Flag to check if the calculator is waiting for the second operand

  // Handles the number button clicks (0-9)
  const handleNumberClick = (number) => {
    // If waiting for the second operand, replace the current value
    if (waitingForSecondOperand) {
      setDisplayValue(number);
      setWaitingForSecondOperand(false);
    } else {
      // If the display shows "0", replace it with the number clicked, otherwise append the clicked number
      setDisplayValue((prev) => (prev === "0" ? number : prev + number));
    }
  };

  // Handles the operator button clicks (+, -, *)
  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue); // Convert the current display value to a number

    if (firstOperand === null) {
      // If no operand has been entered yet, set the first operand
      setFirstOperand(inputValue);
    } else if (operator) {
      // If an operator is already selected, perform the calculation
      const result = performCalculation(firstOperand, operator, inputValue);
      setDisplayValue(String(result)); // Show the result on the display
      setFirstOperand(result); // Store the result as the new first operand
    }

    setOperator(nextOperator); // Set the new operator
    setWaitingForSecondOperand(true); // Indicate that we are waiting for the second operand
  };

  // Performs the calculation based on the operator selected
  const performCalculation = (first, operator, second) => {
    switch (operator) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      default:
        return second; // If no operator, just return the second operand (e.g., for the first input)
    }
  };

  // Handles the equal button click to calculate the result
  const handleEqualClick = () => {
    if (operator && firstOperand !== null) {
      const secondOperand = parseFloat(displayValue); // Get the second operand from the display
      const result = performCalculation(firstOperand, operator, secondOperand); // Perform the calculation
      setDisplayValue(String(result)); // Display the result
      setFirstOperand(null); // Reset the first operand
      setOperator(null); // Reset the operator
      setWaitingForSecondOperand(false); // Reset the waiting flag
    }
  };

  // Handles the clear button click to reset the calculator
  const handleClearClick = () => {
    setDisplayValue("0"); // Reset the display to "0"
    setFirstOperand(null); // Clear the first operand
    setOperator(null); // Clear the operator
    setWaitingForSecondOperand(false); // Reset the waiting flag
  };

  return (
    <div className="calculator">
      {/* Display section */}
      <div className="display" data-testid="display">{displayValue}</div>
      
      {/* Number buttons */}
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(String(number))} // Handle number button click
          >
            {number}
          </button>
        ))}
      </div>

      {/* Operator buttons (+, -, *, =, C) */}
      <div>
        {["+", "-", "*"].map((op) => (
          <button
            key={op}
            className="operator"
            onClick={() => handleOperatorClick(op)} // Handle operator button click
          >
            {op}
          </button>
        ))}
        <button className="equal" onClick={handleEqualClick}> {/* Equals button */}
          =
        </button>
        <button className="clear" onClick={handleClearClick}> {/* Clear button */}
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
