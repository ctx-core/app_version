import { versioned_ } from '../versioned_'
/**
 *
 * @param script_src{string}
 * @param params{import('./index.d.ts').js_versioned__params_T}
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
