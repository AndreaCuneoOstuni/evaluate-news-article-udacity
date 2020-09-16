//Import the js file to test
import { addPolarityValue } from "../src/client/js/addPolarityValue"

describe("Testing the polarity translation functionality", () => {
    test("Testing the addPolarityValue() function", () => {
           expect(addPolarityValue("P+")).toBe("Strong positive")
    })
    test("Testing the addPolarityValue() function", () => {
        expect(addPolarityValue("P")).toBe("Positive")
    })
    test("Testing the addPolarityValue() function", () => {
        expect(addPolarityValue("NEU")).toBe("Neutral")
    })
    test("Testing the addPolarityValue() function", () => {
           expect(addPolarityValue("N")).toBe("Negative")
    })
    test("Testing the addPolarityValue() function", () => {
        expect(addPolarityValue("N+")).toBe("Strong negative")
    })
    test("Testing the addPolarityValue() function", () => {
           expect(addPolarityValue("NONE")).toBe("No sentiment")
    })
});