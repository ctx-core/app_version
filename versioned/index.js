/// <reference types="../version/index.d.ts" />
import { version_ } from '../version/index.js'
/**
 * versioned file
 * @param {string}url
 * @param {version__params_T}url
 * @returns {string}
 */
export function versioned_(
	url,
	params
) {
	return `${url}?${version_(params)}`
}
