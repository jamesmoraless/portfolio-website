"use client";

import type { ReactNode } from "react";
import { Board, INK, Rule } from "./theme";

/**
 * Favicon options.
 *
 * A favicon is only ever judged at 16px, so every option is shown at 96 / 32 /
 * 16 and then again inside a tab strip. Anything that stops reading at 16 is
 * not a candidate, however good it looks at 96.
 *
 * All five are drawn from the design system already in use: near-black ground,
 * bone text, one signal accent, hairline border, square corners.
 */

/** 01 — Initials. The conventional choice. */
function Monogram({ s }: { s: number }) {
  return (
    <Chip s={s}>
      <span
        style={{
          fontSize: s * 0.46,
          fontWeight: 700,
          letterSpacing: "-0.07em",
          color: INK.text,
          lineHeight: 1,
        }}
      >
        JM
      </span>
    </Chip>
  );
}

/**
 * 02 — Initial plus the nav's accent caret. SHIPPED.
 *
 * Drawn as geometry on a 12-unit grid, not set in Geist: a 9px rendered J is
 * grey mush at 16px, and square corners match a system that has no rounded
 * corners anywhere. This is the same grid src/app/favicon.ico is generated on,
 * so what is on this board is what is in the tab.
 *
 * The tick at the bottom left is load-bearing — without it the glyph reads as a
 * mirrored L rather than a J.
 */
const MARK_02: [number, number, number, number, "text" | "accent"][] = [
  [5, 0, 7, 10, "text"],    // stem
  [0, 10, 7, 12, "text"],   // foot
  [0, 7, 2, 10, "text"],    // terminal tick
  [9, 2, 12, 10, "accent"], // caret
];

function InitialCaret({ s }: { s: number }) {
  const u = (s * 0.75) / 12;
  const o = s * 0.125;
  return (
    <Chip s={s}>
      <span style={{ position: "absolute", inset: 0 }}>
        {MARK_02.map(([x0, y0, x1, y1, tone]) => (
          <span
            key={`${x0}-${y0}`}
            style={{
              position: "absolute",
              left: o + x0 * u,
              top: o + y0 * u,
              width: (x1 - x0) * u,
              height: (y1 - y0) * u,
              background: tone === "accent" ? INK.accent : INK.text,
            }}
          />
        ))}
      </span>
    </Chip>
  );
}

/** 03 — The terminal prompt from the nav wordmark. */
function Prompt({ s }: { s: number }) {
  return (
    <Chip s={s}>
      <span
        className="mono"
        style={{ fontSize: s * 0.46, color: INK.text, lineHeight: 1, letterSpacing: "-0.02em" }}
      >
        ~/
      </span>
    </Chip>
  );
}

/** 04 — The caret alone. No meaning, maximum legibility. */
function Caret({ s }: { s: number }) {
  return (
    <Chip s={s}>
      <span style={{ width: s * 0.22, height: s * 0.56, background: INK.accent }} />
    </Chip>
  );
}

/** 05 — One lit cell of the hero's 12-column grid. */
function GridCell({ s }: { s: number }) {
  const cell = s * 0.22;
  return (
    <Chip s={s}>
      <span
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(3, ${cell}px)`,
          gridTemplateRows: `repeat(3, ${cell}px)`,
          gap: 1,
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} style={{ background: i === 4 ? INK.accent : INK.hairStrong }} />
        ))}
      </span>
    </Chip>
  );
}

function Chip({ s, children }: { s: number; children: ReactNode }) {
  return (
    <span
      style={{
        width: s,
        height: s,
        background: INK.bg,
        border: `1px solid ${INK.hair}`,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

type Mark = (p: { s: number }) => ReactNode;

const OPTIONS: {
  id: string;
  name: string;
  Mark: Mark;
  note: string;
  selected?: boolean;
}[] = [
  {
    id: "01",
    name: "Monogram",
    Mark: Monogram,
    note: "Safe and readable, but two letterforms fight each other at 16px and it says nothing the rest of the site does not.",
  },
  {
    id: "02",
    name: "Initial + caret",
    Mark: InitialCaret,
    note: "One letterform and one accent bar — the nav wordmark compressed. Two shapes, high contrast, still reads at 16.",
    selected: true,
  },
  {
    id: "03",
    name: "Prompt",
    Mark: Prompt,
    note: "Closest to the ~/ identity, but the tilde is a thin squiggle and it is the first thing to collapse at 16.",
  },
  {
    id: "04",
    name: "Caret",
    Mark: Caret,
    note: "Perfect legibility at any size and the only orange in a tab strip. Carries no meaning on its own.",
  },
  {
    id: "05",
    name: "Grid cell",
    Mark: GridCell,
    note: "Ties to the hero grid. At 16px the hairlines blur into a grey square — the weakest of the five.",
  },
];

/** A tab strip is the only honest place to compare favicons. */
function Tab({ Mark, label, active }: { Mark: Mark; label: string; active?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        width: 190,
        height: 34,
        padding: "0 12px",
        borderRadius: "6px 6px 0 0",
        background: active ? "#2A2A2E" : "#161618",
        borderTop: `1px solid ${active ? INK.hairStrong : "transparent"}`,
      }}
    >
      <Mark s={16} />
      <span
        style={{
          fontSize: 11,
          color: active ? INK.text : INK.faint,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        James Morales | Portfolio
      </span>
      <span style={{ marginLeft: "auto", fontSize: 11, color: INK.faint }}>×</span>
    </span>
  );
}

export default function Favicon() {
  return (
    <Board h={700}>
      <div style={{ paddingTop: 44, paddingBottom: 26 }}>
        <span className="lbl" style={{ color: INK.accent }}>
          07
        </span>
        <span className="lbl" style={{ marginLeft: 16 }}>
          Favicon — five options, 02 shipped
        </span>
      </div>
      <Rule strong />

      {/* Options */}
      <div style={{ display: "flex", gap: 28, paddingTop: 30 }}>
        {OPTIONS.map(({ id, name, Mark, note, selected }) => (
          <div key={id} style={{ flex: 1 }}>
            <div style={{ height: 2, background: selected ? INK.accent : INK.hair }} />
            <div style={{ height: 22, display: "flex", alignItems: "center" }}>
              {selected ? (
                <span className="lbl" style={{ color: INK.accent }}>
                  Shipped
                </span>
              ) : null}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, paddingBottom: 16 }}>
              <span className="mono" style={{ fontSize: 11, color: INK.accent }}>
                {id}
              </span>
              <span style={{ fontSize: 14, fontWeight: 500, color: INK.text }}>{name}</span>
            </div>

            <Mark s={96} />

            <div style={{ display: "flex", alignItems: "flex-end", gap: 14, paddingTop: 18 }}>
              <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Mark s={32} />
                <span className="lbl">32</span>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Mark s={16} />
                <span className="lbl">16</span>
              </span>
            </div>

            <div style={{ height: 18 }} />
            <Rule />
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 11.5,
                lineHeight: 1.6,
                color: INK.faint,
              }}
            >
              {note}
            </p>
          </div>
        ))}
      </div>

      {/* Tab strip */}
      <div style={{ paddingTop: 34 }}>
        <span className="lbl" style={{ color: INK.muted }}>
          At 16px, in a tab strip
        </span>
        <div style={{ height: 14 }} />
        <div
          style={{
            display: "flex",
            gap: 2,
            alignItems: "flex-end",
            padding: "10px 12px 0",
            background: "#0D0D0F",
            border: `1px solid ${INK.hair}`,
            borderBottom: "none",
          }}
        >
          {OPTIONS.map(({ id, Mark, name }) => (
            <Tab key={id} Mark={Mark} label={name} active={id === "02"} />
          ))}
        </div>
        <div style={{ height: 3, background: INK.hairStrong }} />
      </div>

      <div style={{ paddingTop: 22, display: "flex", gap: 14, alignItems: "flex-start" }}>
        <span className="mono" style={{ fontSize: 11, color: INK.accent, paddingTop: 2 }}>
          →
        </span>
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: INK.muted, maxWidth: 980 }}>
          <span style={{ color: INK.text }}>Decided: 02.</span> The only option that is both legible
          at 16px and actually says something — the J is the name, the orange bar is the caret from
          the nav, so the tab and the site read as one thing. It ships as geometry on a 12-unit
          grid rather than as set type, because a 9px rendered J is grey mush and square corners
          match a system with no rounded corners anywhere. Live in{" "}
          <span className="mono" style={{ color: INK.text }}>
            src/app/
          </span>{" "}
          as favicon.ico (16/32/48, each drawn natively rather than downsampled), icon.png (512) and
          apple-icon.png (180). This replaces the purple square left over from the old indigo
          palette, which was the last purple anywhere on the site.
        </p>
      </div>
    </Board>
  );
}
