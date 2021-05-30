import { versioned_ } from './versioned_'
import type { version_params__I } from './version_'
/**
 *
 * @param {*}ctx
 * @param script_src
 * @param params
 * @returns {string}
 */
export function js_versioned_(script_src:string, params:js_versioned_params__I) {
	const extName = (!params || !params.debug) ? '.min.js' : '.js'
	return versioned_(`${script_src}${extName}`, params)
}
export interface js_versioned_params__I extends version_params__I {
	debug?:boolean
}
export { js_versioned_ as _versioned__js }
