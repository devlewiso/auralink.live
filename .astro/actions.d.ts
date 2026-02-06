declare module "astro:actions" {
	type Actions = typeof import("/home/devlewiso/Desktop/git/auralink.live/src/actions/index.ts")["server"];

	export const actions: Actions;
}