import { AliasFn } from '../generator/typings'

const gpo: AliasFn = {
	alias: 'gpo',
	prints (args) {
		args.colourText.red(args.returnOfCommand)
	},
}