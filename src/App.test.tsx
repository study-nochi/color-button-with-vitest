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
