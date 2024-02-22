/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

it("Should add One to counter when clicking Add button", () => {
  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  //fireEvent permet de simuler une action utilisateur, ici un click
  fireEvent.click(screen.getByTestId("button-add"));
  expect(screen.getByRole("heading")).toHaveTextContent("1");
});

it("Should remove One to counter when clicking Substract button", () => {
  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  //fireEvent permet de simuler une action utilisateur, ici un click
  fireEvent.click(screen.getByTestId("button-substract"));
  expect(screen.getByRole("heading")).toHaveTextContent("-1");
});
