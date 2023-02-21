export type AliasFn = {
	alias: string,
	prints?: (args: AliasArgs) => string,
	performs: (args: AliasArgs) => string,
}
export type AliasArgs = {
	splatAll: string,
	item0: string,
	item1: string,
	item2: string,
	colourText: ColourInterface
}
export type ColourInterface = {
	accent: (payload: string) => string,
	red: (payload: string) => string
}