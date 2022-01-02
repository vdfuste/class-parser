import ClassParser from "../src";

test("Object Parser", () => {
	expect(ClassParser("Martha"))
	.toBe("Hello Martha! :D");
});
