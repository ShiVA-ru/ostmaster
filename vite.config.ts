import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	// GitHub Pages serves a project site from /<repo>; the deploy workflow sets BASE_PATH.
	// Empty means the site root (custom domain or local development).
	const { BASE_PATH = '' } = loadEnv(mode, '.', 'BASE_PATH');
	const base = BASE_PATH as '' | `/${string}`;

	return {
		plugins: [
			enhancedImages(),
			sveltekit({
				compilerOptions: {
					runes: ({ filename }) =>
						filename.split(/[/\\]/).includes('node_modules') ? undefined : true
				},
				adapter: adapter({ fallback: undefined }),
				paths: { base }
			})
		]
	};
});
