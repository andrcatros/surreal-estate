import React from "react";
import { render, cleanup } from "@testing-library/react";
import Alert from "../components/Alert";
import "@testing-library/jest-dom/extend-expect";

describe("renders Alert component", () => {
  afterEach(cleanup);

  it("renders error Alert component", () => {
    const { getByText } = render(
      <Alert alert={{ message: "Error", isSuccess: false }} />
    );
    expect(getByText(/Error/i).textContent).toBe("Error!");
  });

  it("renders success Alert component", () => {
    const { getByText } = render(
      <Alert alert={{ message: "Success", isSuccess: true }} />
    );
    expect(getByText(/Success/i).textContent).toBe("Success!");
  });
});
