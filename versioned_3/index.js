/// <reference types="../version/index.d.ts" />
import { versioned_ } from '../versioned/index.js'
/**
 * _versioned with ctx
 * @param {version__params_T}params
 * @returns {(url:string)=>string}
 */
export function versioned_3(params) {
	return function versioned_2(url) {
		return versioned_(url, params)
	}
}
