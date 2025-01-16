# Reproduction: Rollup fails to bundle undici 

```
npm run build
npm run build:rolldown
```

Resulting bundle sizes:

```
     31 index-no-undici-rolldown
 457688 index-rolldown
1035668 index-rollup
```

Rollup fails with:

```bash
> rollup -c
./index.js → build/index-rollup...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
node:sqlite (imported by "node:sqlite?commonjs-external")
created build/index-rollup in 584ms
```
