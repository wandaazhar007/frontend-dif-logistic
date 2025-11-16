import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

test("renders logo and nav", () => {
  render(<Header />);
  expect(screen.getByRole("img", { name: /logo/i })).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});