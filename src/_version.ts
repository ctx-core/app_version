export function _version(opts?) {
	return (
		(opts && (opts.CACHE_VERSION || opts.VERSION))
		|| process.env.CACHE_VERSION
		|| process.env.VERSION
		|| Math.random()
	)
}
