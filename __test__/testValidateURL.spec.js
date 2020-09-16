//Import the js file to test
import { validateURL } from "../src/client/js/validateURL"

describe("Testing the url validate functionality", () => {
    test("Testing the validateURL() function", () => {
           expect(validateURL('https://jestjs.io/docs/en/getting-started#using-babel')).toBe(true)
    })
    test("Testing the validateURL() function", () => {
        expect(validateURL('js.io/docs/en/getting-started#using-babel')).toBe(false)
    })
    test("Testing the validateURL() function", () => {
        expect(validateURL('https://www.google.com')).toBe(true)
    })
});