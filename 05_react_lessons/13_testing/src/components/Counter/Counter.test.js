import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Tests", () => {
  let count, increaseBtn, decreaseBtn;
  beforeEach(() => {
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
  });
  test("increase btn", async () => {
    await userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });
  test("decrease btn", async () => {
    await userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
