enum CaseType {
	camelCase = "camelCase",
	"kebab-case" = "kebak-case",
	lowercase = "lowercase",
	PascalCase = "PascalCase",
	snake_case = "snake_case",
	NONE = "NONE",
};

let parserCase = CaseType.NONE;

function SetCaseType(caseType:CaseType) {
	parserCase = caseType;
}

export { SetCaseType, CaseType };