import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import serverModule from './dist/server/server.js';

const app = new Hono();

// 1. Serve static files (CSS, JS, images) from the client build directory
app.use('/*', serveStatic({ root: './dist/client' }));

// 2. Route all other requests to TanStack Start's SSR handler
app.all('*', async (c) => {
  // Use c.env or process.env depending on your environment needs, Render uses process.env
  return await serverModule.fetch(c.req.raw, process.env, c.executionCtx);
});

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

console.log(`Starting Render optimized Node server on port ${port}...`);

serve({
  fetch: app.fetch,
  port
});
