//import { SetCaseType, CaseType } from "./caseTypes";

function Parse(...args:any[]) {
	let newClass:string = "";

	for(let i = 0; i < args.length; i++) {
		const arg:any = args[i];
		if(arg !== null) {
			if((typeof arg === "string" && arg !== "") 
			|| (typeof arg === "number" && arg > 0)) newClass += arg + " ";
			else if(Array.isArray(arg) && arg.length) {
				for(let n = 0; n < arg.length; n++) {
					const res = Parse(arg[n]);
					if(res) newClass += res + " ";
				}
			}
			else {
				const keys = Object.keys(arg);
				for(let n = 0; n < keys.length; n++) {
					const key = keys[n];
					if(typeof arg[key] === "boolean" && arg[key]) newClass += key + " ";
					else newClass += Parse(arg[key]);
				}
			}
		}
	}

	return newClass.trim();
};

export default Parse;
//export { SetCaseType, CaseType };