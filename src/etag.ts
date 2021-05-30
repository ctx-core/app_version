/**
 * ctx-core version etag functions
 * @module @ctx-core/version__app/etag
 */
import { atob_Uint32Array_ } from '@ctx-core/atob'
export const protocol_version = 0
/**
 * Extracts weak ETag formatted with:
 *
 * - log2(64 ^ 32) ~ 192 bits
 * - {Uint32} protocol version
 * - {Uint32} CACHE_VERSION
 * - {Uint32} timestamp (optional)
 * - 96 bits - rest
 * @param {string} etag - base64 encoded etag format
 */
export function _etag_ctx(etag:string) {
	const etag$ = etag.replace('-', '')
	const atob_Uint32Array = atob_Uint32Array_(etag$)
	const protocol_version = atob_Uint32Array[0]
	const CACHE_VERSION = atob_Uint32Array[1]
	const timestamp = atob_Uint32Array[2]
	const etag_ctx = {
		protocol_version,
		CACHE_VERSION,
		timestamp
	}
	return etag_ctx
}
export { _etag_ctx as _ctx__etag }
