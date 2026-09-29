const tempoNextjsPlugin = require("tempo-sdk/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
    // About's gallery requests quality 85; Next 16 warns unless it is declared.
    qualities: [75, 85],
  },
}

// Tempo's annotation plugin. It no-ops unless TEMPO=true (which Tempo sets when
// it starts the dev server), so it is safe to keep here permanently. Without it,
// elements in Tempo route storyboards aren't clickable or editable.
module.exports = tempoNextjsPlugin()(nextConfig)
