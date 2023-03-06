import type { AliasFn } from '../generator/typings'
import git from './git'

const aliases: AliasFn[] = [
	...git
]
export default aliases