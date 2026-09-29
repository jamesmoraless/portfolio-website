"use client";

import { ArrowLink, Board, Btn, INK, Rule, Tag } from "./theme";

const SWATCHES = [
  ["Ground", INK.bg, "Page. True near-black, faint cool cast."],
  ["Surface", INK.surface, "Hover rows, plate backings."],
  ["Hairline", INK.hair, "Every divider. Does the work cards used to."],
  ["Hairline+", INK.hairStrong, "Ghost borders, emphasis rules."],
  ["Faint", INK.faint, "Mono labels, indices, disabled."],
  ["Muted", INK.muted, "Body copy, bullets."],
  ["Ink", INK.text, "Headings, primary fill."],
  ["Signal", INK.accent, "≤4 uses per screen. Never a large fill."],
] as const;

/** Read straight off the running site's framer-motion props. */
const MOTION = [
  ["Trigger", "whileInView + viewport={{ once: true }} — fires once per session"],
  ["Enter", "opacity 0 → 1, y 20 → 0"],
  ["Duration", "500ms (hero plate 700ms)"],
  ["Stagger", "delay: index × 0.2s — archive rows × 0.1s"],
  ["Lateral", "x ±20 for side columns, x 50 for the hero plate"],
  ["Hero", "animates on mount, children offset 0.2s / 0.4s"],
] as const;

export default function Foundations() {
  return (
    <Board h={1330}>
      <div style={{ paddingTop: 44, paddingBottom: 26 }}>
        <span className="lbl" style={{ color: INK.accent }}>
          Sharp
        </span>
        <span className="lbl" style={{ marginLeft: 16 }}>
          Design foundations
        </span>
      </div>
      <Rule strong />

      <div style={{ display: "flex", gap: 56, paddingTop: 36 }}>
        {/* Palette */}
        <div style={{ width: 400 }}>
          <span className="lbl">01 — Palette</span>
          <div style={{ height: 20 }} />
          <Rule />
          {SWATCHES.map(([name, hex, use]) => (
            <div
              key={name}
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                padding: "13px 0",
                borderBottom: `1px solid ${INK.hair}`,
              }}
            >
              <span
                style={{
                  width: 34,
                  height: 34,
                  background: hex,
                  border: `1px solid ${INK.hairStrong}`,
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13.5, fontWeight: 500 }}>{name}</span>
                  <span className="mono" style={{ fontSize: 11, color: INK.faint }}>
                    {hex.toUpperCase()}
                  </span>
                </div>
                <span style={{ fontSize: 11.5, color: INK.faint, lineHeight: 1.5 }}>{use}</span>
              </div>
            </div>
          ))}
          <div style={{ paddingTop: 18 }}>
            <span style={{ fontSize: 12, color: INK.faint, lineHeight: 1.6 }}>
              No purple, no gradient, no glass. One hue carries every emphasis on the site.
            </span>
          </div>
        </div>

        {/* Type */}
        <div style={{ flex: 1 }}>
          <span className="lbl">02 — Type</span>
          <div style={{ height: 20 }} />
          <Rule />
          <div style={{ padding: "22px 0", borderBottom: `1px solid ${INK.hair}` }}>
            <span className="lbl">Display / 600 / −.05em</span>
            <div className="d2" style={{ marginTop: 12 }}>
              James Morales
            </div>
          </div>
          <div style={{ padding: "20px 0", borderBottom: `1px solid ${INK.hair}` }}>
            <span className="lbl">Section / 56 / −.035em</span>
            <div className="d3" style={{ marginTop: 10 }}>
              Work Experience
            </div>
          </div>
          <div style={{ padding: "20px 0", borderBottom: `1px solid ${INK.hair}` }}>
            <span className="lbl">Body / 15.5 / 1.72</span>
            <p className="body" style={{ margin: "10px 0 0", color: INK.muted, maxWidth: 560 }}>
              Designing and building software that solves real problems, blending engineering
              expertise with a sharp focus on product vision and delivery.
            </p>
          </div>
          <div style={{ padding: "20px 0", borderBottom: `1px solid ${INK.hair}` }}>
            <span className="lbl">Metadata / Mono / +.16em caps</span>
            <div style={{ marginTop: 12, display: "flex", gap: 26 }}>
              <span className="mono" style={{ fontSize: 11, color: INK.accent }}>
                01
              </span>
              <span className="lbl" style={{ color: INK.muted }}>
                Nov 2025 — Present
              </span>
              <span className="lbl" style={{ color: INK.muted }}>
                Toronto, ON
              </span>
              <span className="lbl" style={{ color: INK.muted }}>
                GPA 3.9
              </span>
            </div>
          </div>
          <div style={{ paddingTop: 18 }}>
            <span style={{ fontSize: 12, color: INK.faint, lineHeight: 1.6 }}>
              Two families only — a tight grotesk and a mono. Everything that is a number, a date,
              a label or a tag goes mono; that split is what makes it read engineered rather than
              templated. Rendering here in the system grotesk; Geist / Geist Mono is the intended
              pair and is already a dependency of the app, just never wired up.
            </span>
          </div>
        </div>

        {/* Atoms */}
        <div style={{ width: 330 }}>
          <span className="lbl">03 — Atoms</span>
          <div style={{ height: 20 }} />
          <Rule />

          <div style={{ padding: "22px 0", borderBottom: `1px solid ${INK.hair}` }}>
            <span className="lbl">Buttons — 46px, 2px radius</span>
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              <Btn>View My Work</Btn>
              <Btn variant="ghost">Contact Me</Btn>
            </div>
          </div>

          <div style={{ padding: "20px 0", borderBottom: `1px solid ${INK.hair}` }}>
            <span className="lbl">Tags — parts list, not pills</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
              {["TypeScript", "Supabase", "AI Agents", "React", "PostgreSQL"].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <div style={{ padding: "20px 0", borderBottom: `1px solid ${INK.hair}` }}>
            <span className="lbl">Link</span>
            <div style={{ marginTop: 16 }}>
              <ArrowLink>View Full Resume</ArrowLink>
            </div>
          </div>

          <div style={{ padding: "20px 0", borderBottom: `1px solid ${INK.hair}` }}>
            <span className="lbl">Row — default / hover</span>
            <div style={{ marginTop: 14, border: `1px solid ${INK.hair}` }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderBottom: `1px solid ${INK.hair}`,
                }}
              >
                <span className="mono" style={{ fontSize: 12, color: INK.muted }}>
                  Kubernetes
                </span>
                <span className="mono" style={{ fontSize: 11, color: INK.faint }}>
                  cloud
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  background: INK.surface,
                  borderLeft: `2px solid ${INK.accent}`,
                }}
              >
                <span className="mono" style={{ fontSize: 12, color: INK.text }}>
                  Terraform
                </span>
                <span className="mono" style={{ fontSize: 11, color: INK.faint }}>
                  cloud
                </span>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: 18 }}>
            <span style={{ fontSize: 12, color: INK.faint, lineHeight: 1.6 }}>
              No shadows anywhere. Elevation is a hairline plus one value step.
            </span>
          </div>
        </div>
      </div>

      {/* Motion is specified here rather than performed: the boards must
          screenshot deterministically, so nothing on this canvas animates.
          These are the values already running in src/components/sections/*. */}
      <div style={{ paddingTop: 40 }}>
        <span className="lbl">04 — Motion (spec, not performed)</span>
        <div style={{ height: 16 }} />
        <div style={{ height: 1, background: INK.hairStrong }} />
        <div style={{ display: "flex", gap: 56, paddingTop: 20 }}>
          <div style={{ flex: 1 }}>
            {MOTION.map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "9px 0",
                  borderBottom: `1px solid ${INK.hair}`,
                }}
              >
                <span className="lbl" style={{ width: 96, flexShrink: 0, paddingTop: 2 }}>
                  {k}
                </span>
                <span className="mono" style={{ fontSize: 11.5, color: INK.muted }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
          <div style={{ width: 430 }}>
            <span style={{ fontSize: 12, color: INK.faint, lineHeight: 1.7 }}>
              Sections keep their scroll-in animation — this canvas just holds them at their
              settled state so screenshots stay stable.
              <br />
              <br />
              One change worth making on the way in: the 0.2s per-item stagger across five
              experience rows takes a full second to resolve. At this density 0.06–0.08s reads as
              deliberate instead of slow.
              <br />
              <br />
              Add a{" "}
              <span className="mono" style={{ color: INK.muted }}>
                prefers-reduced-motion
              </span>{" "}
              branch that drops the 20px travel and keeps the fade.
            </span>
          </div>
        </div>
      </div>
    </Board>
  );
}
