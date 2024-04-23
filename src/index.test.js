// index.test.js
import React from "react";
import { render } from "@testing-library/react";

import { Galaxy } from "./index";

describe("Galaxy Component", () => {
  test("renders the Galaxy component", () => {
    render(<Galaxy />);
  });
});