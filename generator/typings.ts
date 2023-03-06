export type AliasFn = {
	alias: string,
	prelude?: (args: AliasArgs) => string,
	prints?: (args: AliasArgs) => string,
	performs: (args: AliasArgs) => string,
}
export const AliasFn = (alias: string, prints: (args: AliasArgs) => string, performs: (args: AliasArgs) => string) => ({ alias, prints, performs })
AliasFn.withPrelude = (alias: string, prelude: (args: AliasArgs) => string, prints: (args: AliasArgs) => string, performs: (args: AliasArgs) => string): AliasFn => ({ alias, prints, performs, prelude })

export type AliasArgs = {
	rest: string,
	item0: string,
	item1: string,
	item2: string,
	declareVariable(varName: string, valueExpr: string): string
	concatenateVariable(varName: string): string,
	colourText: ColourInterface
}
export type ColourInterface = {
	accent: (payload: string) => string,
	danger: (payload: string) => string,
	success: (payload: string) => string,
	warning: (payload: string) => string,
	info: (payload: string) => string,
	specialInfo: (payload: string) => string
}