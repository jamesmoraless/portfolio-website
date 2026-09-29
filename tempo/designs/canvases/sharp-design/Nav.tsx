"use client";

import { Board, INK, Rule } from "./theme";
import { NAV } from "./content";

/**
 * The top bar, reused by both hero boards.
 * Keeps the `~/James Morales` + caret identity — it is the one genuinely
 * distinctive thing in the current nav — but sets it in mono/display instead of
 * a bold indigo serif-ish blob, and drops the shadow for a single hairline.
 */
export function TopBar({ active = "Home" }: { active?: string }) {
  return (
    <div
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        borderBottom: `1px solid ${INK.hair}`,
        background: "rgba(10,10,11,.72)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        <span className="mono" style={{ fontSize: 15, color: INK.faint }}>
          ~/
        </span>
        <span
          style={{ fontSize: 15, fontWeight: 500, color: INK.text, letterSpacing: "-.012em" }}
        >
          James Morales
        </span>
        <span className="caret" />
      </div>
      <nav style={{ display: "flex", gap: 34 }}>
        {NAV.map((item) => {
          const on = item.label === active;
          return (
            <span
              key={item.path}
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: ".13em",
                textTransform: "uppercase",
                color: on ? INK.text : INK.faint,
                paddingBottom: 3,
                borderBottom: `1px solid ${on ? INK.accent : "transparent"}`,
              }}
            >
              {item.label}
            </span>
          );
        })}
      </nav>
    </div>
  );
}

export default function NavBoard() {
  return (
    <Board h={300} pad={false}>
      <div style={{ padding: "26px 80px 14px" }}>
        <span className="lbl">Navigation — default / hover / mobile</span>
      </div>
      <TopBar />
      <div style={{ height: 22 }} />
      <TopBar active="Projects" />

      <div style={{ display: "flex", gap: 40, padding: "26px 80px 0" }}>
        {/* Mobile: the menu that today drops a plain white list. */}
        <div style={{ width: 320, border: `1px solid ${INK.hair}` }}>
          <div
            style={{
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 18px",
              borderBottom: `1px solid ${INK.hair}`,
            }}
          >
            <div>
              <span className="mono" style={{ fontSize: 13, color: INK.faint }}>
                ~/
              </span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>James Morales</span>
            </div>
            <span style={{ color: INK.text, fontSize: 15 }}>✕</span>
          </div>
          {NAV.map((item, i) => (
            <div
              key={item.path}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "baseline",
                padding: "11px 18px",
                borderBottom: i === NAV.length - 1 ? "none" : `1px solid ${INK.hair}`,
              }}
            >
              <span className="mono" style={{ fontSize: 10, color: INK.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: ".13em",
                  textTransform: "uppercase",
                  color: INK.text,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, paddingTop: 4 }}>
          <span className="lbl">Notes</span>
          <div style={{ height: 14 }} />
          <Rule />
          {[
            "Same six links, same labels — only the treatment changes.",
            "Active state is a 1px accent rule under the item, not a colour swap.",
            "Bar is 64px with one hairline instead of a drop shadow.",
          ].map((n) => (
            <div key={n} style={{ borderBottom: `1px solid ${INK.hair}`, padding: "11px 0" }}>
              <span className="small" style={{ color: INK.muted }}>
                {n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Board>
  );
}
