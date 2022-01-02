export default {
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
	testMatch: [
		"**/test/**/*.[jt]s?(x)",
		"**/?(*.)+(spec|test).[tj]s?(x)"
	],
	transform: {
		"^.+\\.(t|j)sx?$": "ts-jest"
	},
};
