import { render, screen } from "@testing-library/react";
import Upload from "./Upload";

test("renders upload input", () => {
  render(<Upload />);
  expect(screen.getByRole("textbox") || screen.getByRole("button")).toBeInTheDocument();
});
