"use client";

import type { ReactNode } from "react";

/**
 * Sharp — design language for the portfolio revamp.
 *
 * Ground rules this file encodes:
 *  - Near-black ground, one neutral ramp, ONE signal accent used sparingly.
 *  - Hairline rules carry structure. No shadows, no glass, no gradients.
 *  - Radius is 0 for plates and rules, 2px for buttons and tags. Never more.
 *  - Monospace is the metadata layer: indices, years, labels, tech, links.
 *  - Photos are desaturated and framed so they sit inside the palette.
 */

export const INK = {
  bg: "#0A0A0B",
  surface: "#0F0F11",
  raised: "#141417",
  hair: "#1E1E22",
  hairStrong: "#2A2A30",
  text: "#EDEDF0",
  muted: "#9A9AA3",
  faint: "#5E5E68",
  accent: "#FF4A1C",
};

export function SharpStyles() {
  return (
    <style>{`
/* NOTE: this whole block is a JS template literal, so it must contain no
   backticks and no dollar-brace sequences.
   No @font-face or @import here on purpose: the remote font request never
   loaded in this host, so every board was already rendering the fallback.
   The stack below is what actually rendered, so nothing changes visually.
   To get Geist for real, wire up the geist package the app already depends on. */
.sharp {
  --bg:#0A0A0B; --surface:#0F0F11; --hair:#1E1E22; --hair-2:#2A2A30;
  --text:#EDEDF0; --muted:#9A9AA3; --faint:#5E5E68; --accent:#FF4A1C;
  font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Inter',system-ui,sans-serif;
  background:var(--bg); color:var(--text);
  -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
}
.sharp .mono {
  font-family:ui-monospace,'SF Mono',SFMono-Regular,Menlo,Consolas,monospace;
  font-feature-settings:'tnum' 1;
}
/* Micro-label: the mono caps used for every section index and field name. */
.sharp .lbl {
  font-family:ui-monospace,'SF Mono',SFMono-Regular,Menlo,Consolas,monospace;
  font-size:10px; line-height:1; letter-spacing:.16em; text-transform:uppercase;
  color:var(--faint);
}
.sharp .d1 { font-size:148px; line-height:.86; letter-spacing:-.05em; font-weight:600; }
.sharp .d2 { font-size:92px;  line-height:.92; letter-spacing:-.04em; font-weight:600; }
.sharp .d3 { font-size:56px;  line-height:1;   letter-spacing:-.035em; font-weight:600; }
.sharp .h1 { font-size:30px;  line-height:1.15;letter-spacing:-.022em; font-weight:500; }
.sharp .h2 { font-size:21px;  line-height:1.25;letter-spacing:-.016em; font-weight:500; }
.sharp .lede { font-size:21px; line-height:1.55; letter-spacing:-.011em; }
.sharp .body { font-size:15.5px; line-height:1.72; }
.sharp .small { font-size:13px; line-height:1.6; }

/* Photographic plates: framed, desaturated, no radius. */
.sharp .plate { border:1px solid var(--hair); background:var(--surface); overflow:hidden; }
.sharp .plate img { display:block; width:100%; height:100%; object-fit:cover;
  filter:grayscale(.38) contrast(1.06) brightness(.9) saturate(.9); }
/* Product screenshots are far more saturated than the photography — they need
   a harder knock-down or they shout over the palette. */
.sharp .plate.dim img { filter:grayscale(.82) contrast(1.12) brightness(.74) saturate(.7); }
/* Already-dark captures: the knock-down above would crush them to flat black,
   so they keep their own value and just lose some saturation. */
.sharp .plate.deep img { filter:grayscale(.3) contrast(1.04) brightness(1.02) saturate(.9); }
/* Company marks are dark-on-transparent PNGs; on black they disappear.
   Flatten every one to a single bone silhouette so the column reads as a set. */
.sharp .mark img { filter:brightness(0) invert(1) opacity(.72); }

/* The 12-column hairline grid that gives the hero its structure. */
.sharp .grid12 {
  position:absolute; inset:0; pointer-events:none;
  background-image:repeating-linear-gradient(to right,
    rgba(255,255,255,.035) 0 1px, transparent 1px calc(100% / 12));
  background-size:100% 100%;
}
.sharp .caret { display:inline-block; width:8px; height:17px; background:var(--accent);
  margin-left:3px; vertical-align:-2px; animation:sharpblink 1.05s steps(1) infinite; }
@keyframes sharpblink { 0%,50%{opacity:1} 50.01%,100%{opacity:0} }
`}</style>
  );
}

/** Board shell: fixed frame, hairline border, styles injected once per storyboard. */
export function Board({
  w = 1440,
  h,
  children,
  pad = true,
}: {
  w?: number;
  h: number;
  children: ReactNode;
  pad?: boolean;
}) {
  return (
    <div
      className="sharp"
      style={{ width: w, height: h, overflow: "hidden", position: "relative" }}
    >
      <SharpStyles />
      <div className="w-[1440px]" style={{ padding: pad ? "0 80px" : 0, height: "100%" }}>{children}</div>
    </div>
  );
}

export function Rule({ strong = false, style }: { strong?: boolean; style?: React.CSSProperties }) {
  return (
    <div
      style={{ height: 1, background: strong ? INK.hairStrong : INK.hair, width: "100%", ...style }}
    />
  );
}

/** Numbered section header: mono index in accent, title in display weight. */
export function SectionHead({
  index,
  title,
  sub,
  right,
}: {
  index: string;
  title: string;
  sub?: string;
  right?: ReactNode;
}) {
  return (
    <div>
      <Rule />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingTop: 22,
          paddingBottom: 30,
        }}
      >
        <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          <span
            className="mono"
            style={{ fontSize: 11, color: INK.accent, letterSpacing: ".1em", paddingTop: 13 }}
          >
            {index}
          </span>
          <div>
            <h2 className="d3" style={{ margin: 0, color: INK.text }}>
              {title}
            </h2>
            {sub && (
              <p className="small" style={{ margin: "10px 0 0", color: INK.faint, maxWidth: 520 }}>
                {sub}
              </p>
            )}
          </div>
        </div>
        {right}
      </div>
    </div>
  );
}

/** Parts-list tag. Hairline rect, mono caps — deliberately not a pill. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="mono"
      style={{
        fontSize: 10,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: INK.muted,
        border: `1px solid ${INK.hair}`,
        borderRadius: 2,
        padding: "5px 8px",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

export function Btn({
  children,
  variant = "solid",
}: {
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  const solid = variant === "solid";
  return (
    <span
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 46,
        padding: "0 26px",
        borderRadius: 2,
        fontSize: 11,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        background: solid ? INK.text : "transparent",
        color: solid ? INK.bg : INK.text,
        border: `1px solid ${solid ? INK.text : INK.hairStrong}`,
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

/** Mono link with a trailing rule — replaces the old underlined CTA links. */
export function ArrowLink({ children }: { children: ReactNode }) {
  return (
    <span
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontSize: 11,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: INK.text,
        borderBottom: `1px solid ${INK.hairStrong}`,
        paddingBottom: 6,
      }}
    >
      {children}
      <span style={{ color: INK.accent }}>→</span>
    </span>
  );
}
