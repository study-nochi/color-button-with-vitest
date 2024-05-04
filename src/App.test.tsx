import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  // render the app
  render(<App />);

  // find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  // check initial color
  expect(buttonElement.getAttribute("class")).toContain("red");

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement.textContent).toBe("Change to red");

  // check the button color
  expect(buttonElement.getAttribute("class")).toContain("blue");
});

test("checkbox flow", () => {
  render(<App />);

  // fine elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  // click checkbox again to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});
