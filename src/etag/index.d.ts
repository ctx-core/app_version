/**
 * ctx-core version etag functions
 * @module @ctx-core/version__app/etag
 */
export declare const protocol_version:number
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
export declare function etag_ctx_(etag:string):etag_ctx_T
export interface etag_ctx_T {
	protocol_version:number
	CACHE_VERSION:number
	timestamp:number
}
export {
	etag_ctx_ as _etag_ctx,
	etag_ctx_ as _ctx__etag,
}
