"use client";

import { ArrowLink, Board, INK, SectionHead, Tag } from "./theme";
import { EXPERIENCE } from "./content";

/**
 * Work Experience — the timeline idea was right, the execution was soft.
 * The rail is now a real hairline running the full column with a square node
 * on it (accent only for the current role). Each role is a row on the grid
 * rather than a floating indigo card, bullets are hairline-separated, and the
 * site screenshot is a 16:10 plate with no radius.
 * Repwave genuinely has no logo and no screenshot — that stays honest here.
 */
export default function Experience() {
  return (
    <Board h={2660}>
      <div style={{ height: 40 }} />
      <SectionHead
        index="04"
        title={EXPERIENCE.heading}
        sub={EXPERIENCE.sub}
        right={<ArrowLink>{EXPERIENCE.resumeLink}</ArrowLink>}
      />

      <div style={{ position: "relative" }}>
        <div
          style={{ position: "absolute", left: 82, top: 0, bottom: 0, width: 1, background: INK.hair }}
        />

        {EXPERIENCE.items.map((job, i) => (
          <div
            key={job.company}
            style={{
              display: "flex",
              gap: 0,
              padding: "24px 0",
              borderTop: `1px solid ${INK.hair}`,
            }}
          >
            {/* Rail column */}
            <div style={{ width: 82, flexShrink: 0, position: "relative", paddingRight: 22 }}>
              <span className="mono" style={{ fontSize: 11, color: INK.faint }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  position: "absolute",
                  right: -4,
                  top: 4,
                  width: 7,
                  height: 7,
                  background: i === 0 ? INK.accent : INK.hairStrong,
                }}
              />
            </div>

            {/* Meta column */}
            <div style={{ width: 208, flexShrink: 0, paddingLeft: 24 }}>
              <span className="mono" style={{ fontSize: 11, color: i === 0 ? INK.text : INK.muted }}>
                {job.period}
              </span>
              <div style={{ height: 12 }} />
              <span className="lbl">{job.location}</span>
            </div>

            {/* Body */}
            <div style={{ flex: 1, paddingRight: 34 }}>
              <div style={{ display: "flex", gap: 13, alignItems: "center" }}>
                {job.companyLogo ? (
                  <span
                    className="mark"
                    style={{
                      width: 26,
                      height: 26,
                      border: `1px solid ${INK.hair}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: INK.surface,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={job.companyLogo}
                      alt={`${job.company} logo`}
                      style={{ width: 16, height: 16, objectFit: "contain" }}
                    />
                  </span>
                ) : (
                  <span
                    className="mono"
                    style={{
                      width: 26,
                      height: 26,
                      border: `1px solid ${INK.hair}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      color: INK.muted,
                      flexShrink: 0,
                    }}
                  >
                    {job.company.charAt(0)}
                  </span>
                )}
                <div>
                  <h3 className="h2" style={{ margin: 0, color: INK.text }}>
                    {job.title}
                  </h3>
                  <span className="mono" style={{ fontSize: 11, color: INK.muted }}>
                    {job.company}
                  </span>
                </div>
              </div>

              <div style={{ height: 16 }} />
              {job.description.map((d, di) => (
                <div
                  key={di}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "9px 0",
                    borderTop: di === 0 ? `1px solid ${INK.hair}` : "none",
                    borderBottom: `1px solid ${INK.hair}`,
                  }}
                >
                  <span
                    className="mono"
                    style={{ fontSize: 10, color: INK.faint, paddingTop: 4, flexShrink: 0 }}
                  >
                    {String(di + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: 13.5, lineHeight: 1.62, color: INK.muted }}>{d}</span>
                </div>
              ))}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 14 }}>
                {job.technologies.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            {/* Plate */}
            <div style={{ width: 264, flexShrink: 0 }}>
              {job.screenshot ? (
                <div
                  className={job.screenshot.includes("-dark") ? "plate deep" : "plate dim"}
                  style={{ height: 166 }}
                >
                  <img className="w-[279px] h-[417px]" src={job.screenshot} alt={`${job.company} website screenshot`} />
                </div>
              ) : (
                <div
                  style={{
                    height: 166,
                    border: `1px dashed ${INK.hair}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="lbl">No plate</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Board>
  );
}
