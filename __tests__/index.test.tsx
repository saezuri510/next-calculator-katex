import { render, screen } from "@testing-library/react";

import IndexPage from "../src/pages";
import "@testing-library/jest-dom";

describe("Rendering", () => {
  it("Should render screenshot text", () => {
    render(<IndexPage />);

    const heading = screen.getByText("screenshot");

    expect(heading).toBeInTheDocument();
  });
});
