import { registrationForm } from "./registration";
const reg = new registrationForm("Adam", "Sandler", 56, 89990221212);

describe("firstName", () => {
    test("positive-exist", () => {
        expect(reg.firstName).not.toBeUndefined();
    });
    test("positive-pattern", () => {
        expect(reg.firstName).toMatch(/\w/);
    });
    test("positive-type", () => {
        expect(typeof (reg.firstName)).toBe("string");
    });
    test("negative-pattern", () => {
        expect(reg.firstName).toMatch(/\W/);
    });
    test("negative-type", () => {
        expect(typeof (reg.firstName)).toBe("number");
    });
});
describe("lastName", () => {
    test("positive-exist", () => {
        expect(reg.lastName).not.toBeUndefined();
    });
    test("positive-pattern", () => {
        expect(reg.lastName).toMatch(/\w/);
    });
    test("positive-type", () => {
        expect(typeof (reg.lastName)).toBe("string");
    });
    test("negative-pattern", () => {
        expect(reg.lastName).toMatch(/\W/);
    });
    test("negative-type", () => {
        expect(typeof (reg.lastName)).toBe("number");
    });
});
describe("age", () => {
    test("positive-exist", () => {
        expect(reg.age).not.toBeUndefined();
    });
    test("positive-type", () => {
        expect(typeof reg.age).toBe("number");
    });
    test("positive-adult", () => {
        expect(reg.age).toBeGreaterThanOrEqual(18);
    });
    test("negative-adult", () => {
        expect(reg.age).toBeLessThan(18);
    });
    test("negative-type", () => {
        expect(typeof reg.age).toBe("string");
    });
});
describe("phone", () => {
    test("positive-exist", () => {
        expect(reg.phone).not.toBeUndefined();
    });
    test("positive-pattern", () => {
        expect(typeof reg.phone).toBe("number");
    });
    test("negative-pattern", () => {
        expect(typeof reg.phone).toBe("string");
    });
});