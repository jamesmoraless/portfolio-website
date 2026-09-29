"use client";

import { Board, INK, SectionHead } from "./theme";
import { EDUCATION } from "./content";

/**
 * Education — from two big white cards to a two-row ledger.
 * Left rail carries the metadata (years, place, GPA) in mono; the school and
 * degree lead; courses and activities sit as compact mono lists; the building
 * photo becomes a wide short plate instead of half a card.
 */
export default function Education() {
  return (
    <Board h={930}>
      <div style={{ height: 40 }} />
      <SectionHead index="04" title={EDUCATION.heading} sub={EDUCATION.sub} />

      <div style={{ height: 1, background: INK.hairStrong }} />

      {EDUCATION.items.map((ed, i) => (
        <div
          key={ed.school}
          style={{
            display: "flex",
            gap: 40,
            padding: "30px 0",
            borderBottom: `1px solid ${INK.hair}`,
          }}
        >
          {/* Rail */}
          <div style={{ width: 168, flexShrink: 0 }}>
            <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
              <span className="mono" style={{ fontSize: 11, color: INK.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mono" style={{ fontSize: 11.5, color: INK.text }}>
                {ed.period}
              </span>
            </div>
            <div style={{ height: 12 }} />
            <span className="lbl">{ed.location}</span>
            <div style={{ height: 10 }} />
            <span className="mono" style={{ fontSize: 11, color: INK.muted }}>
              {ed.gpa}
            </span>
          </div>

          {/* Body */}
          <div style={{ flex: 1 }}>
            <h3 className="h1" style={{ margin: 0, color: INK.text }}>
              {ed.school}
            </h3>
            {/* Bound, not literal: this sits inside a .map(), so editing the
                text in the canvas style panel replaces the binding with one
                hardcoded string for BOTH cards. That is how Ivey ended up
                showing the engineering degree. */}
            <p style={{ margin: "8px 0 0", fontSize: 15, color: INK.muted }}>{ed.degree}</p>

            <div style={{ display: "flex", gap: 54, marginTop: 26 }}>
              <div style={{ flex: 1 }}>
                <span className="lbl">Relevant Courses</span>
                <div style={{ height: 12 }} />
                {ed.courses.map((c) => (
                  <div
                    key={c}
                    className="mono"
                    style={{
                      fontSize: 11.5,
                      color: INK.muted,
                      padding: "6px 0",
                      borderBottom: `1px solid ${INK.hair}`,
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
              <div style={{ flex: 1 }}>
                <span className="lbl">Extracurricular</span>
                <div style={{ height: 12 }} />
                {ed.extracurricular.map((c) => (
                  <div
                    key={c}
                    className="mono"
                    style={{
                      fontSize: 11.5,
                      color: INK.muted,
                      padding: "6px 0",
                      borderBottom: `1px solid ${INK.hair}`,
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plate */}
          <div className="plate" style={{ width: 340, height: 214, flexShrink: 0 }}>
            <img src={ed.image} alt={`${ed.school} building`} />
          </div>
        </div>
      ))}
    </Board>
  );
}
