"use client";

import { Board, Btn, INK } from "./theme";
import { TopBar } from "./Nav";
import { HERO } from "./content";

/**
 * Hero B — "Gallery".
 * The opposite bet from A: no visible grid, far less type, and the portrait
 * carries the page as a full-bleed plate running edge to edge and floor to
 * ceiling. Quieter and more confident; A is denser and more technical.
 */
export default function HeroB() {
  return (
    <Board h={900} pad={false}>
      <TopBar />

      <div style={{ display: "flex", height: 836 }}>
        {/* Left — calm column, vertically centred */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px 0 80px",
            position: "relative",
          }}
        >
          {/* Signature mark: the only large piece of accent on the page. */}
          <span
            style={{ position: "absolute", left: 0, top: "50%", width: 3, height: 132, background: INK.accent, transform: "translateY(-50%)" }}
          />

          <span className="lbl">{HERO.role}</span>

          <h1 className="d2" style={{ margin: "24px 0 0", color: INK.text }}>
            James
            <br />
            Morales
          </h1>

          <div style={{ height: 1, background: INK.hairStrong, width: 380, margin: "34px 0 28px" }} />

          <p className="lede" style={{ margin: 0, color: INK.muted, maxWidth: 520 }}>
            {HERO.pitch}
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 42 }}>
            <Btn>{HERO.ctaPrimary}</Btn>
            <Btn variant="ghost">{HERO.ctaSecondary}</Btn>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 64 }}>
            <span style={{ width: 28, height: 1, background: INK.hairStrong }} />
            <span className="lbl">Scroll — About</span>
          </div>
        </div>

        {/* Right — full-bleed plate, hard hairline edge, no radius */}
        <div
          style={{
            width: 620,
            borderLeft: `1px solid ${INK.hair}`,
            position: "relative",
            overflow: "hidden",
            background: INK.surface,
          }}
        >
          <img
            src={HERO.image}
            alt={HERO.imageAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 28%",
              filter: "grayscale(.34) contrast(1.06) brightness(.86) saturate(.92)",
            }}
          />
          {/* Grounds the plate into the black so it reads as one surface. */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(10,10,11,.55), rgba(10,10,11,0) 38%), linear-gradient(to top, rgba(10,10,11,.6), rgba(10,10,11,0) 30%)",
            }}
          />
          <span className="lbl" style={{ position: "absolute", left: 24, bottom: 22 }}>
            Fig. 01
          </span>
        </div>
      </div>
    </Board>
  );
}
