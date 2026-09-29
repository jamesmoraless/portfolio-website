"use client";

import { Board, INK } from "./theme";
import { ARCHIVE } from "./content";

/**
 * /archive — already the best-structured page on the site, so this keeps the
 * table and just stops fighting it: hairline rows instead of a white card,
 * mono everywhere (it is all metadata), year in accent, and "Built with" as a
 * comma-separated mono run rather than seven indigo pills per row, which at
 * fifteen rows was the densest visual noise on the whole site.
 */
export default function Archive() {
  const hovered = 3;

  return (
    <Board h={1040}>
      <div style={{ height: 48 }} />

      <span
        className="mono"
        style={{
          fontSize: 11,
          letterSpacing: ".13em",
          textTransform: "uppercase",
          color: INK.muted,
          display: "inline-flex",
          gap: 9,
          alignItems: "center",
        }}
      >
        <span style={{ color: INK.accent }}>←</span>
        {ARCHIVE.back}
      </span>

      <h1 className="d2" style={{ margin: "34px 0 0", color: INK.text }}>
        {ARCHIVE.heading}
      </h1>

      <div style={{ display: "flex", alignItems: "baseline", gap: 14, margin: "18px 0 30px" }}>
        <span className="lbl">{ARCHIVE.rows.length} entries</span>
        <span style={{ flex: 1, height: 1, background: INK.hair }} />
      </div>

      {/* Head */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "84px 380px 1fr 170px",
          paddingBottom: 11,
          borderBottom: `1px solid ${INK.hairStrong}`,
        }}
      >
        {ARCHIVE.columns.map((c, i) => (
          <span key={c} className="lbl" style={{ textAlign: i === 3 ? "right" : "left" }}>
            {c}
          </span>
        ))}
      </div>

      {/* Rows */}
      {ARCHIVE.rows.map((r, i) => {
        const on = i === hovered;
        return (
          <div
            key={r.title}
            style={{
              display: "grid",
              gridTemplateColumns: "84px 380px 1fr 170px",
              alignItems: "center",
              padding: "13px 0",
              borderBottom: `1px solid ${INK.hair}`,
              background: on ? INK.surface : "transparent",
            }}
          >
            <span className="mono" style={{ fontSize: 12, color: on ? INK.accent : INK.faint }}>
              {r.year}
            </span>
            <span style={{ fontSize: 14, color: INK.text, letterSpacing: "-.01em", paddingRight: 24 }}>
              {r.title}
            </span>
            <span className="mono" style={{ fontSize: 11, color: INK.faint, paddingRight: 24 }}>
              {r.builtWith.join(", ")}
            </span>
            <span style={{ display: "flex", gap: 16, justifyContent: "flex-end" }}>
              {r.links.map((l) => (
                <span
                  key={l}
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: on ? INK.text : INK.muted,
                    display: "inline-flex",
                    gap: 6,
                    alignItems: "center",
                  }}
                >
                  {l}
                  <span style={{ color: INK.accent }}>↗</span>
                </span>
              ))}
            </span>
          </div>
        );
      })}
    </Board>
  );
}
