import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer"; // Adjust the import according to your file structure

describe("Footer", () => {
  it("renders elements", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const textElement = screen.getByText(/Copyright/i);
    expect(textElement).toBeInTheDocument();
  });
});
