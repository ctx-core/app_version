import type { version__params_T } from '../version/index.js'
/**
 *
 * @param {*}ctx
 * @param script_src
 * @param params
 * @returns {string}
 */
export declare function js_versioned_(
	script_src:string,
	params:js_versioned__params_T
):string
export { js_versioned_ as _versioned__js }
export interface js_versioned__params_T extends version__params_T {
	debug?:boolean
}
export declare type js_versioned_params__I = js_versioned__params_T
