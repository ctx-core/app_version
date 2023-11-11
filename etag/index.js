/**
 * ctx-core version etag functions
 * @module @ctx-core/version__app/etag
 */
import { atob_Uint32Array_ } from '@ctx-core/atob/index'
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
 * @returns {import('./index.d.ts').etag_o_T}
 */
export function etag_o_(etag) {
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
export {
	etag_o_ as etag_ctx_,
	etag_o_ as _etag_ctx,
	etag_o_ as _ctx__etag,
}
