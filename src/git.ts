import { AliasFn } from '../generator/typings'

const gpo: AliasFn = {
	alias: 'gpo',
	performs (args) {
		return `git pull origin ${args.rest}`
	},
	prints (args) {
		return args.colourText.info(`: git pull origin ${args.colourText.specialInfo(args.rest)}`)
	},
}

const gccp = AliasFn.withPrelude('gccp',
	(a) => a.declareVariable('syx_branchname', 'git rev-parse HEAD'),
	(a) => a.colourText.info(`: git push origin ${a.colourText.specialInfo(a.concatenateVariable('syx_branchname'))}`),
	(a) => `git push origin ${a.concatenateVariable('syx_branchname')}`
)

export default [gccp, gpo]