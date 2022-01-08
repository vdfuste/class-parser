//import { SetCaseType, CaseType } from "./caseTypes";

function parse(...args:any[])
{
	let newClass:string = "";

	for(let i = 0; i < args.length; i++)
	{
		const arg:any = args[i];
		const type:string = typeof arg;

		if(arg)
		{
			if(type === "string" || (type ===  "number" && arg > 0))
			{
				newClass += arg + " ";
			}
			else if(Array.isArray(arg) && arg.length)
			{
				for(let n = 0; n < arg.length; n++)
				{
					newClass += parse(arg[n]) + " ";
				}
			}
			else //if(type === "object")
			{
				const keys = Object.keys(arg);

				for(let k = 0; k < keys.length; k++)
				{
					const key = keys[k];
					const value = arg[key];

					if(typeof value === "boolean" && value)
					{
						newClass += key + " ";
					}
					else if(Array.isArray(value) && value.length)
					{
						let arrayClass = key + " ";
						
						for(let n = 0; n < value.length; n++)
						{
							if(!value[n])
							{
								arrayClass = "";
								n = value.length;
							}
						}

						newClass += arrayClass;
					}
					else if(value)
					{
						newClass += value + " ";
					}
				}
			}
		}
	}

	return newClass.trim();
}

export = parse;
//export default parse;
//export { SetCaseType, CaseType };
