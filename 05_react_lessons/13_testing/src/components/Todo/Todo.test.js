import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo test", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByText("Text");
  });
  test("Default items must show up", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });
  test("Input and button must be in doc", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  test("Input value must be added to the list when the button is clicked",async ()=>{
    const name = "Mehmet";
    await userEvent.type(input,name);
    await userEvent.click(button)
    expect(screen.getByText(name).toBeInTheDocument())
  })
});
