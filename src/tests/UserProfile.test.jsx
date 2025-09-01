import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import UserProfile from "../components/UserProfile";
import "@testing-library/jest-dom/vitest";

describe("UserProfile", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetch data and display the user data", async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({
        id: 4,
        name: "HomoSapiens",
        email: "sapiens@gmail.com",
      }),
    });

    render(<UserProfile userId={1} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /HomoSapiens/i })
      ).toBeInTheDocument();

      expect(screen.getByText(/sapiens@gmail.com/i)).toBeInTheDocument();
    });
  });
});
