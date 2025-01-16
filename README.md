# Reproduction: Rollup fails to bundle undici 

```
npm run build
npm run build:rolldown
```

results in:

```bash
> rollup -c
./index.js → build/index-rollup...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
node:sqlite (imported by "node:sqlite?commonjs-external")
(!) Circular dependency
node_modules/undici/lib/web/websocket/util.js -> node_modules/undici/lib/web/websocket/connection.js -> node_modules/undici/lib/web/websocket/util.js
```
