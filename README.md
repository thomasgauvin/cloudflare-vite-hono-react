# Cloudflare Workers using React Vite and Hono API template

This project uses the [Cloudflare Workers Vite plugin](https://www.npmjs.com/package/@cloudflare/vite-plugin), [Hono](https://hono.dev/) for APIs (stored in `/api`) and the frontend React single-page application (in `src`).

> [!NOTE]  
> **[Cloudflare Workers Vite plugin](https://www.npmjs.com/package/@cloudflare/vite-plugin) is still in development**. There remains features that are not yet supported by the plugin, such as `wrangler dev --remote` (needed for certain bindings such as Browser Rendering), the AI binding (see https://github.com/cloudflare/workers-sdk/pull/8016), general improvements needed (see https://github.com/cloudflare/workers-sdk/pull/8223).
>
> At this time, I still recommend setting up a single-page-application + Hono API by following this guide: https://thomasgauvin.com/writing/how-to-host-react-angular-vue-and-other-single-page-applications-on-cloudflare-workers-with-static-assets/, which is what I'm using for [ai-chat-template](https://github.com/thomasgauvin/ai-chat-template).


The project is configured such that the React app will be built by the Vite bundler into `dist` (default config for `vite.config.ts`). The Workers project is configured to serve the static assets of `dist` (configured in `wrangler.jsonc`). If requests don't resolve in static assets, then the Hono API (in `api`) will execute (configured in `wrangler.jsonc` with the `main` entrypoint).

The navigation fallback (in case you go to a 404 and want that to be handled by your single-page-application) is configured in `wrangler.jsonc` by both the `not_found_handling` (equal to `single-page-application`) and `binding` (equal to `ASSETS`) which is used in the catch-all route in `index.ts`. From my testing, both of these are required to have navigation fallback properly configured.

## Get started

Create the project using [create-cloudflare](https://www.npmjs.com/package/create-cloudflare):

```sh
npm create cloudflare@latest -- --template thomasgauvin/cloudflare-vite-hono-react
```

Run the project and deploy it:

```sh
cd <project-name>
npm install
npm run dev
```

```
npm run deploy
```

## What's next?

- Change the name of the package (in `package.json`)
- Change the name of the worker (in `wrangler.json`)
