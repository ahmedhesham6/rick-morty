import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Loading from "../../components/Loading";

describe("Loading component", () => {
  it("renders a loading image", () => {
    const { getByAltText } = render(<Loading />);
    const image = getByAltText("Rick and Morty");
    expect(image).toBeInTheDocument();
  });
});
