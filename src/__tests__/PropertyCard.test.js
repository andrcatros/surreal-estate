import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PropertyCard from "../components/PropertyCard";

describe("renders PropertyCard component", () => {
  afterEach(cleanup);

  xit("renders placeholder text", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/placeholder/i).textContent).toBe(
      "this is a placeholder the property card component"
    );
  });

  it("renders PropertyCard component with accurate data when passed props", () => {
    const mockPropertyListing = {
      id: "mockId",
      title: "mock listing",
      type: "flat",
      bedrooms: "3",
      price: 100000,
      city: "Manchester",
      email: "mock.m@email.com",
    };

    const { getByText, asFragment } = render(
      <PropertyCard listing={mockPropertyListing} />
    );

    expect(getByText("mock listing")).toHaveClass("listing-title");
    expect(getByText("flat")).toHaveClass("listing-type");
    expect(getByText("100000")).toHaveClass("listing-price");
    expect(getByText("Manchester")).toHaveClass("listing-city");
    expect(getByText("mock.m@email.com")).toHaveClass("listing-email");

    expect(asFragment()).toMatchSnapshot();
  });
});
