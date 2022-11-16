import { versioned_ } from '../versioned_/index.js'
/**
 *
 * @param {*}ctx
 * @param script_src
 * @param params
 * @returns {string}
 */
export function js_versioned_(script_src, params) {
	const extName = (!params || !params.debug) ? '.min.js' : '.js'
	return versioned_(`${script_src}${extName}`, params)
}
export { js_versioned_ as _versioned__js }
