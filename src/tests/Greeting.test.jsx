import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Greeting } from "../components/Greeting";
import "@testing-library/jest-dom/vitest";


// kodu describe içine alıp gruplayabilirim. Farklı bir durumu kontrol etmek istersen, farklı bir grup açarak test edersin.
describe("Greeting", () => {
  it("render a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Merhaba, Dünya")).toBeInTheDocument();
  });

  it("render greeting with a name", () => {
    render(<Greeting name={"HomoDeus"} />);
    expect(screen.getByText("Merhaba, HomoDeus")).toBeInTheDocument();
  });
});
