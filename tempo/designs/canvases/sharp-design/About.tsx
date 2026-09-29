"use client";

import { Board, INK, Rule, SectionHead } from "./theme";
import { ABOUT } from "./content";

/**
 * About — three changes.
 *  1. Portrait goes square and small; the writing leads, not a circle avatar.
 *  2. Key Highlights becomes a numbered spec list on hairlines, not a mauve card.
 *  3. "Life in Action" becomes a filmstrip with a mono 03/07 index instead of
 *     a rounded carousel with dots — same seven photos, same captions.
 */
export default function About() {
  const active = 2; // Surfing — shown as the selected frame

  return (
    <Board h={940}>
      <div style={{ height: 40 }} />
      <SectionHead index="01" title={ABOUT.heading} />

      <div style={{ display: "flex", gap: 64 }}>
        {/* Writing */}
        <div style={{ width: 660 }}>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 32 }}>
            <div className="plate h-[140px] w-[123px]" style={{ flexShrink: 0 }}>
              <img src="/images/profile.jpg" alt="Profile picture" style={{ objectPosition: "center 30%" }} />
            </div>
            <div style={{ paddingTop: 6 }}>
              <span className="lbl">Toronto, ON</span>
              <p className="lede" style={{ margin: "12px 0 0", color: INK.text, maxWidth: 520 }}>
                {ABOUT.paragraphs[0]}
              </p>
            </div>
          </div>

          <Rule />
          <div style={{ paddingTop: 26 }}>
            {ABOUT.paragraphs.slice(1).map((p, i) => (
              <p
                key={i}
                className="body"
                style={{ margin: i === 0 ? 0 : "20px 0 0", color: INK.muted, maxWidth: 620 }}
              >
                {p}
              </p>
            ))}
          </div>

          <div style={{ height: 40 }} />
          <span className="lbl" style={{ color: INK.muted }}>
            {ABOUT.highlightsTitle}
          </span>
          <div style={{ height: 16 }} />
          <div style={{ height: 1, background: INK.hairStrong }} />
          {ABOUT.highlights.map((h, i) => (
            <div
              key={h}
              style={{
                display: "flex",
                gap: 22,
                padding: "15px 0",
                borderBottom: `1px solid ${INK.hair}`,
              }}
            >
              <span
                className="mono"
                style={{ fontSize: 11, color: INK.accent, paddingTop: 3, flexShrink: 0 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.6, color: INK.text }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Filmstrip */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: 14,
            }}
          >
            <span className="lbl" style={{ color: INK.muted }}>
              {ABOUT.galleryTitle}
            </span>
            <span className="mono" style={{ fontSize: 11, color: INK.faint }}>
              <span style={{ color: INK.accent }}>{String(active + 1).padStart(2, "0")}</span>
              {" / "}
              {String(ABOUT.gallery.length).padStart(2, "0")}
            </span>
          </div>

          <div className="plate" style={{ height: 420 }}>
            <img src={ABOUT.gallery[active].src} alt={ABOUT.gallery[active].caption} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 0" }}>
            <span style={{ fontSize: 13.5, color: INK.text }}>{ABOUT.gallery[active].caption}</span>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="mono" style={{ fontSize: 12, color: INK.faint }}>
                ←
              </span>
              <span className="mono" style={{ fontSize: 12, color: INK.text }}>
                →
              </span>
            </div>
          </div>

          <div style={{ height: 22 }} />
          <div style={{ display: "flex", gap: 8 }}>
            {ABOUT.gallery.map((g, i) => (
              <div
                key={g.src}
                className="plate"
                style={{
                  width: 74,
                  height: 56,
                  borderColor: i === active ? INK.accent : INK.hair,
                  opacity: i === active ? 1 : 0.5,
                }}
              >
                <img src={g.src} alt={g.caption} />
              </div>
            ))}
          </div>

          <div style={{ height: 30 }} />
          <Rule />
        </div>
      </div>
    </Board>
  );
}
