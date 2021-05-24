import { _versioned } from './_versioned'
import type { _version_params_I } from './_version'
/**
 *
 * @param {*}ctx
 * @param script_src
 * @param params
 * @returns {string}
 */
export function _js_versioned(script_src:string, params:_js_versioned_params_I) {
	const extName = (!params || !params.debug) ? '.min.js' : '.js'
	return _versioned(`${script_src}${extName}`, params)
}
export interface _js_versioned_params_I extends _version_params_I {
	debug?:boolean
}
export { _js_versioned as _versioned__js }
