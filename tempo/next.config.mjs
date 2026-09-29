import tempoNextjsPlugin from "tempo-sdk/nextjs/plugin";
import { fileURLToPath } from "node:url";

const withTempo = tempoNextjsPlugin();

export default withTempo({
  // Mirrors the app's own next.config.js so <Image> renders the same raw
  // /images/... URLs the site serves; tempo/public symlinks to the app's public/.
  images: { unoptimized: true },
  // Disabled for the canvas host only — see tempo-project/initialize.ts.
  reactStrictMode: false,
  // fileURLToPath (not URL.pathname): pathname percent-encodes spaces/non-ASCII
  // and yields a "/C:/…" drive path on Windows — a nonexistent directory that
  // Turbopack, which uses this value as its workspace root, panics on.
  outputFileTracingRoot: fileURLToPath(new URL("..", import.meta.url)),
});
