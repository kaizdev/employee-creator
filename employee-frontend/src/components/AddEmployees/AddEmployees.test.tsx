import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";

describe("Add employees component", () => {
    test("Should render a heading", () => {
        // render(<AddEmployees />);
        const heading = screen.getByText(/add a new employee/i);
        expect(heading).not.toEqual(null);
        screen.debug();
    });
});
