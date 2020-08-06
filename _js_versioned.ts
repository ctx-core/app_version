import { _versioned } from './_versioned'
/**
 *
 * @param {*}ctx
 * @param src__script
 * @param opts
 * @returns {string}
 */
export function _js_versioned(src__script, opts?:{ debug?:boolean, minify?:boolean }) {
	const extName = (!opts || !opts.debug) ? '.min.js' : '.js'
	return _versioned(`${src__script}${extName}`, opts)
}
export const _versioned__js = _js_versioned
