import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "../components/Header";

describe("Header component", () => {
  test("renders header text", () => {
    const { getByText } = render(<Header />);
    const headerText = getByText(/Rick and Morty/i);
    expect(headerText).toBeInTheDocument();
  });

  test("renders hero image", () => {
    const { getByAltText } = render(<Header />);
    const heroImage = getByAltText(/Rick and Morty/i);
    expect(heroImage).toBeInTheDocument();
  });
});
