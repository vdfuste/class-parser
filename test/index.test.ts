import Parse from "../src";

test("Strings Parser", () => {
	expect(Parse("Class", "", null, "parsing"))
	.toBe("Class parsing");
});

test("Numbers Parser", () => {
	expect(Parse(0, -1, null, 1))
	.toBe("1");
});

test("String Array Parser", () => {
	expect(Parse(["String", "Array", "parsing", "works"]))
	.toBe("String Array parsing works");
});

test("Number Array Parser", () => {
	expect(Parse([1, 0, -1, null]))
	.toBe("1");
});

test("Object Parser", () => {
	expect(Parse("Object", { fail: false, parsing: true, foo: "works" }))
	.toBe("Object parsing works");
});

test("Complex Parser", () => {
	const arr = [1, 1, "abc", true];
	//const obj = { works: [true, true] };
	const obj = { works: true, num: 1 };

	expect(Parse("Complex", arr, obj))
	.toBe("Complex 1 1 abc works 1");
});

/*test("Object Parser", () => {
	expect(Parse("Parsing", { fails: false, foo: null, works: true, num: 42 }))
	.toBe("Parsing works 42");
});*/
