const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/app.tsx"],
  outfile: "bundle.js",
  bundle: true,
  minify: true,
  jsxFactory: "h",
  jsxFragment: "Fragment",
  sourcemap: true,
  target: ["esnext"],
}).catch(() => process.exit(1));

