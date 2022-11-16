export function version_(params) {
	return (
		(params && (params.CACHE_VERSION || params.VERSION))
		|| process.env.CACHE_VERSION
		|| process.env.VERSION
		|| Math.random().toString()
	)
}
