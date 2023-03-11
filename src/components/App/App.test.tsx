import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/главная/i);
  expect(linkElement).toBeInTheDocument();
});

test("should fail because 1 + 2 does not equal 4", () => {
  const result = 1 + 2;
  expect(result).toBe(4);
});
