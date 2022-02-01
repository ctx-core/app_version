import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { app_version$_ } from './app_version$_.js'
export const app_version_query$_:B<app_version_query$_T> = be_('app_version_query$', ctx=>
	computed$(
		app_version$_(ctx),
		app_version=>
			`v=${encodeURIComponent(app_version as string|number)}`))
export type app_version_query$_T = ReadableAtom$<string>
