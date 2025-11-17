import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "@/app/components/ContactForm";

test("shows validation errors", async () => {
  render(<ContactForm />);
  fireEvent.click(screen.getByRole("button", { name: /kirim/i }));
  expect(await screen.findAllByRole("alert")).toHaveLength(2); // name & message errors for example
});