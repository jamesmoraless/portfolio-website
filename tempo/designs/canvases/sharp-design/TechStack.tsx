"use client";

import { Board, INK, SectionHead } from "./theme";
import { TECH_GROUPS } from "./content";

/**
 * Tech Stack — the biggest single fix on the site.
 *
 * Today: 26 full-colour brand logos on an infinite auto-scrolling marquee. That
 * is the loudest "student portfolio" signal here — it is motion and rainbow
 * where the reader wants a scannable list.
 *
 * Here: the same 26 items, same groupings (taken from the comments already in
 * TechStack.tsx), set as four typographic columns with hairline rows. Nothing
 * moves. One row is shown in its hover state to show the reward.
 */
export default function TechStack() {
  const hovered = "TypeScript";

  return (
    <Board h={470}>
      <div style={{ height: 40 }} />
      <SectionHead index="02" title="Tech Stack" />

      <div style={{ display: "flex", gap: 40 }}>
        {TECH_GROUPS.map((group, gi) => (
          <div key={group.label} style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                paddingBottom: 12,
              }}
            >
              <span className="lbl" style={{ color: INK.muted }}>
                {group.label}
              </span>
              <span className="mono" style={{ fontSize: 10, color: INK.faint }}>
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <div style={{ height: 1, background: INK.hairStrong }} />

            {group.items.map((item) => {
              const on = item === hovered && gi === 0;
              return (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 10px 9px 0",
                    borderBottom: `1px solid ${INK.hair}`,
                    background: on ? INK.surface : "transparent",
                    borderLeft: `2px solid ${on ? INK.accent : "transparent"}`,
                    paddingLeft: on ? 10 : 0,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      background: on ? INK.accent : INK.hairStrong,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="mono"
                    style={{ fontSize: 12.5, color: on ? INK.text : INK.muted }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Board>
  );
}
