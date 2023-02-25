import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import CharacterCard from "../components/CharacterCard";
import { type Character } from "../graphql/client";

const mockCharacter: Character = {
  id: "1",
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  origin: { name: "Earth (C-137)", residents: [] },
  location: { name: "Earth (Replacement Dimension)", residents: [] },
  episode: [],
};

describe("CharacterCard", () => {
  it("renders character data correctly", () => {
    const { getByAltText, getByText } = render(
      <CharacterCard character={mockCharacter} />
    );

    expect(getByAltText("character image")).toBeInTheDocument();
    expect(getByText("Rick Sanchez")).toBeInTheDocument();
    expect(getByText("Alive - Human")).toBeInTheDocument();
    expect(getByText("Origin:")).toBeInTheDocument();
    expect(getByText("Earth (C-137)")).toBeInTheDocument();
    expect(getByText("Last known location:")).toBeInTheDocument();
    expect(getByText("Earth (Replacement Dimension)")).toBeInTheDocument();
  });
});
