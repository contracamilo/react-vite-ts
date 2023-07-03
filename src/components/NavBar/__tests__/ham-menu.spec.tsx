import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HamburgerMenuButton from "../ham-menu";

describe("<HamburgerMenuButton />", () => {
  it("should render without crashing", () => {
    render(<HamburgerMenuButton />);
    const buttonElement = screen.getByTestId("hamburger-button");
    expect(buttonElement).toBeInTheDocument();
  });

  it('should toggle the active class when clicked', () => {
    const { getByTestId } = render(<HamburgerMenuButton />);
    const buttonElement = getByTestId('hamburger-button');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveClass('active');

    fireEvent.click(buttonElement);
    expect(buttonElement).not.toHaveClass('active');
  });
});
