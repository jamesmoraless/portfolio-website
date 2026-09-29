"use client";

import { ArrowLink, Board, INK, SectionHead, Tag } from "./theme";
import { PROJECTS } from "./content";

/**
 * Featured Projects — a 2×2 grid where the grid LINES are the container.
 * No card fill, no shadow, no radius. Cell 01 is shown in its hover state.
 *
 * Note: the live site renders `project.description` (a string[]) straight into
 * a <p>, so all bullets run together as one sentence. Here they are set as the
 * separate lines they already are in the data — same text, readable.
 */
export default function Projects() {
  return (
    <Board h={1120}>
      <div style={{ height: 40 }} />
      <SectionHead
        index="05"
        title={PROJECTS.heading}
        sub={PROJECTS.sub}
        right={<ArrowLink>{PROJECTS.archiveLink}</ArrowLink>}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: `1px solid ${INK.hairStrong}`,
          borderLeft: `1px solid ${INK.hair}`,
        }}
      >
        {PROJECTS.items.map((p, i) => {
          const on = i === 0;
          return (
            <div
              key={p.title}
              style={{
                borderRight: `1px solid ${INK.hair}`,
                borderBottom: `1px solid ${INK.hair}`,
                padding: "24px 26px 26px",
                background: on ? INK.surface : "transparent",
                position: "relative",
                minHeight: 392,
              }}
            >
              {on && (
                <span
                  style={{ position: "absolute", left: -1, top: 0, bottom: 0, width: 2, background: INK.accent }}
                />
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: 11, color: on ? INK.accent : INK.faint }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="lbl">{p.period}</span>
              </div>

              <h3 className="h2" style={{ margin: "16px 0 0", color: INK.text, maxWidth: 520 }}>
                {p.title}
              </h3>

              <div style={{ height: 16 }} />
              {p.description.map((d, di) => (
                <div
                  key={di}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "8px 0",
                    borderTop: `1px solid ${INK.hair}`,
                  }}
                >
                  <span style={{ width: 4, height: 4, background: INK.hairStrong, marginTop: 8, flexShrink: 0 }} />
                  <span style={{ fontSize: 12.5, lineHeight: 1.6, color: INK.muted }}>{d}</span>
                </div>
              ))}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 16 }}>
                {p.technologies.map((t) => (
                  <Tag key={t}>{t.trim()}</Tag>
                ))}
              </div>

              <div style={{ display: "flex", gap: 22, marginTop: 18 }}>
                {p.links.map((l) => (
                  <span
                    key={l}
                    className="mono"
                    style={{
                      fontSize: 10.5,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: INK.text,
                      display: "inline-flex",
                      gap: 7,
                      alignItems: "center",
                    }}
                  >
                    {l}
                    <span style={{ color: INK.accent }}>↗</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Board>
  );
}
