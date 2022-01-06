/*import Parse, * as Parser from "../src";

Test(Parser.CaseType.camelCase, 		"firstExample secondExample thirdExample");
Test(Parser.CaseType["kebab-case"], 	"first-example second-example third-example");
Test(Parser.CaseType.lowercase, 		"firstexample secondexample thirdexample");
Test(Parser.CaseType.PascalCase, 		"FirstExample SecondExample ThirdExample");
Test(Parser.CaseType.snake_case, 		"first_example second_example third_example");

function Test(type:Parser.CaseType, result:string) {
	test(`${type} parsing`, () => {
		Parser.SetCaseType(type); // Setting the case method
		expect(Parse({ firstExample: true, "second-example": true, ThirdExample: true }))
		.toBe(result);
	});
}*/
