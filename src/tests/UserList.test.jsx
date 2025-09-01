import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserList from "../components/UserList";
import "@testing-library/jest-dom/vitest";

describe("UserList", () => {
  it("users olmadığı zaman ekrana no users yazmalı", () => {
    render(<UserList users={[]} />);

    // const result = screen.getByText("No users found");
    const result = screen.getByText(/no users/i); // içerisinden belli bir ifadeyi arayabilirsin.
    expect(result).toBeInTheDocument();
  });

  it("users listesinin render edilmesi", () => {
    const users = [
      { id: 1, name: "HomoSapiens" },
      { id: 2, name: "HomoDeus" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/users/" + user.id);
    });
  });
});
