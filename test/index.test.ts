import ClassParser from "../src";

test("Strings Parser", () => {
	expect(ClassParser("Class", "", null, "parsing"))
	.toBe("Class parsing");
});

test("Numbers Parser", () => {
	expect(ClassParser(0, -1, null, 1))
	.toBe("1");
});

test("String Array Parser", () => {
	expect(ClassParser(["String", "Array", "parsing", "works"]))
	.toBe("String Array parsing works");
});

test("Number Array Parser", () => {
	expect(ClassParser([1, 0, -1, null]))
	.toBe("1");
});

test("Object Parser", () => {
	expect(ClassParser("Object", { fail: false, parsing: true, foo: "works" }))
	.toBe("Object parsing works");
});

test("Complex Parser", () => {
	const arr = [1,1, "abc", true];
	//const obj = { works: [true, true] };
	const obj = { works: true, num: 1 };

	expect(ClassParser("Complex", arr, obj))
	.toBe("Complex parsing works 1");
});

/*test("Object Parser", () => {
	expect(ClassParser("Parsing", { fails: false, foo: null, works: true, num: 42 }))
	.toBe("Parsing works 42");
});*/
