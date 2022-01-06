import Parse from "../src";

describe("Strings", () => {
	test("with Numbers", () => {
		expect(Parse("it", "", "works", 1, 0, -1, null))
		.toBe("it works 1");
	});
	
	test("with Object", () => {
		expect(Parse("it", { fails: false, foo: "works", num: 1 }))
		.toBe("it works 1");
	});
});

describe("Object", () => {
	test("True Array", () => {
		expect(Parse({ it: true, fails: false, works: [true, true, true] }))
		.toBe("it works");
	});

	test("False Array", () => {
		expect(Parse({ it: true, works: true, foo: [true, false, true] }))
		.toBe("it works");
	});
});

describe("Array", () => {
	test("Anonnymous", () => {
		expect(Parse(["it", "works"]))
		.toBe("it works");
	});
	
	test("Multiple Anonnymous", () => {
		expect(Parse(["it"], ["works"]))
		.toBe("it works");
	});
	
	test("with Objects", () => {
		expect(Parse([{ it: true, fails: false, works: true }]))
		.toBe("it works");
	});
});

test("Crushing!", () => {
	expect(Parse([{ it: true, fails: [true, false]}, ["works", { "great": [1, 2, 3], yay: ":D" }]]))
	.toBe("it works great :D");
});
