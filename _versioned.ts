import { _version } from './_version'
/**
 * versioned file
 * @param {*}ctx
 * @param {string} url
 * @returns {string}
 */
export function _versioned(url:string, opts?) {
	return `${url}?${_version(opts)}`
}
