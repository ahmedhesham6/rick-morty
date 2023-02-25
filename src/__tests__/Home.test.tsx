import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { useInfiniteAllCharactersQuery } from "../graphql/client";

jest.mock("../graphql/client", () => ({
  useInfiniteAllCharactersQuery: jest.fn(),
}));

const observe = jest.fn();
const unobserve = jest.fn();

// you can also pass the mock implementation
// to jest.fn as an argument
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe("Home page", () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  test("renders character cards", async () => {
    // Mock the response of useInfiniteAllCharactersQuery
    const mockData = {
      pages: [
        {
          characters: {
            info: {
              next: 2,
            },
            results: [
              {
                id: 1,
                name: "Rick Sanchez",
                status: "Alive",
                species: "Human",
                gender: "Male",
              },
              {
                id: 2,
                name: "Morty Smith",
                status: "Alive",
                species: "Human",
                gender: "Male",
              },
            ],
          },
        },
        {
          characters: {
            info: {
              next: null,
            },
            results: [
              {
                id: 3,
                name: "Summer Smith",
                status: "Alive",
                species: "Human",
                gender: "Female",
              },
              {
                id: 4,
                name: "Beth Smith",
                status: "Alive",
                species: "Human",
                gender: "Female",
              },
            ],
          },
        },
      ],
    };
    (useInfiniteAllCharactersQuery as jest.Mock).mockReturnValueOnce({
      data: mockData,
      isLoading: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
    });

    // Render the component
    render(<Home />);

    // Assert that the character cards are rendered with the correct data
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Morty Smith")).toBeInTheDocument();
    expect(screen.getByText("Summer Smith")).toBeInTheDocument();
    expect(screen.getByText("Beth Smith")).toBeInTheDocument();
  });
});
