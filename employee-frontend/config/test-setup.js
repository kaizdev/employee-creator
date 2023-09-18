import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { JSDOM } from "jsdom";

// add all the react specific jest dom matchers to vitest
expect.extend(matchers);

// once the test is finished - unmount everything rendered to the dom
afterEach(() => {
    cleanup();
});

// your-setup-file.js

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

global.document = window.document;
global.window = window;
