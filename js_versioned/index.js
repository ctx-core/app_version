/// <reference types="./index.d.ts" />
import { versioned_ } from '../versioned/index.js'
/**
 *
 * @param {string}script_src
 * @param {js_versioned__params_T}params
 * @returns {string}
 */
export function js_versioned_(
	script_src,
	params
) {
	const extName =
		(!params || !params.debug)
			? '.min.js'
			: '.js'
	return versioned_(
		`${script_src}${extName}`
		, params)
}
export { js_versioned_ as _versioned__js }
