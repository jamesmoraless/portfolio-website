"use client";

import { Board, Btn, INK } from "./theme";
import { TopBar } from "./Nav";
import { HERO } from "./content";

/**
 * Hero A — "Engineered".
 * Left-weighted and asymmetric, on a 12-column hairline grid you can actually
 * see. The name is set as a two-line stack at 148px so it holds the page the
 * way the old 72px centred version never did. Accent appears three times total.
 */
export default function HeroA() {
  return (
    <Board h={900} pad={false}>
      <div className="grid12" />
      <TopBar />

      <div style={{ position: "relative", height: 836, padding: "0 80px" }}>
        {/* Left — the statement */}
        <div style={{ position: "absolute", left: 80, top: 116, width: 760 }}>
          <span className="lbl">{HERO.role}</span>

          <h1 className="d1" style={{ margin: "26px 0 0", color: INK.text }}>
            James
            <br />
            Morales
          </h1>

          <div
            style={{
              height: 1,
              background: INK.hairStrong,
              width: 560,
              margin: "38px 0 30px",
            }}
          />

          <p className="body" style={{ margin: 0, color: INK.muted, maxWidth: 468 }}>
            {HERO.pitch}
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
            <Btn>{HERO.ctaPrimary}</Btn>
            <Btn variant="ghost">{HERO.ctaSecondary}</Btn>
          </div>
        </div>

        {/* Right — the plate */}
        <div style={{ position: "absolute", right: 80, top: 116, width: 396 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 12,
            }}
          >
            <span className="lbl">Fig. 01</span>
            <span className="mono" style={{ fontSize: 10, color: INK.accent, letterSpacing: ".16em" }}>
              ●
            </span>
          </div>
          <div className="plate" style={{ height: 540 }}>
            <img src={HERO.image} alt={HERO.imageAlt} />
          </div>
        </div>

        {/* Foot — scroll cue sits on the baseline rule, not floating mid-air */}
        <div style={{ position: "absolute", left: 80, right: 80, bottom: 52 }}>
          <div style={{ height: 1, background: INK.hair, marginBottom: 18 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 28, height: 1, background: INK.accent }} />
              <span className="lbl" style={{ color: INK.muted }}>
                Tech Stack
              </span>
            </div>
            <span className="mono" style={{ fontSize: 11, color: INK.faint, letterSpacing: ".14em" }}>
              ↓
            </span>
          </div>
        </div>
      </div>
    </Board>
  );
}
