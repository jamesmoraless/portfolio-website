"use client";

import { Board, INK, Rule } from "./theme";
import { CONTACT } from "./content";

/**
 * Get in Touch — the form is where soft rounded boxes hurt most.
 * Inputs become underline-only fields with mono labels above and an accent rule
 * on focus. Channels become hairline rows. Socials get their names next to the
 * glyphs so the row is readable, instead of four unlabelled icons.
 */
function Field({
  label,
  value,
  focused = false,
  tall = false,
}: {
  label: string;
  value?: string;
  focused?: boolean;
  tall?: boolean;
}) {
  return (
    <div style={{ marginBottom: tall ? 0 : 30 }}>
      <span className="lbl" style={{ color: focused ? INK.accent : INK.faint }}>
        {label}
      </span>
      <div
        style={{
          minHeight: tall ? 92 : 34,
          display: "flex",
          alignItems: tall ? "flex-start" : "center",
          paddingTop: tall ? 12 : 0,
          marginTop: 10,
          borderBottom: `1px solid ${focused ? INK.accent : INK.hairStrong}`,
        }}
      >
        <span style={{ fontSize: 15, color: value ? INK.text : INK.faint, lineHeight: 1.6 }}>
          {value ?? ""}
          {focused && !value && (
            <span
              style={{ display: "inline-block", width: 1, height: 17, background: INK.accent, verticalAlign: "-3px" }}
            />
          )}
        </span>
      </div>
    </div>
  );
}

export default function Contact() {
  const channels = [
    { label: "Email", value: CONTACT.email },
    { label: "Location", value: CONTACT.address },
    { label: "Phone", value: CONTACT.phone },
  ];

  return (
    <Board h={700}>
      <div style={{ height: 56 }} />
      <Rule strong />

      <div style={{ display: "flex", gap: 90, paddingTop: 44 }}>
        {/* Left */}
        <div style={{ width: 640 }}>
          <div style={{ display: "flex", gap: 26, alignItems: "flex-start" }}>
            <span
              className="mono"
              style={{ fontSize: 11, color: INK.accent, letterSpacing: ".1em", paddingTop: 26 }}
            >
              06
            </span>
            <h2 className="d2" style={{ margin: 0, color: INK.text }}>
              {CONTACT.heading}
            </h2>
          </div>
          <p className="lede" style={{ margin: "20px 0 0 37px", color: INK.muted }}>
            {CONTACT.sub}
          </p>

          <div style={{ height: 52 }} />
          <span className="lbl" style={{ color: INK.muted }}>
            {CONTACT.infoTitle}
          </span>
          <div style={{ height: 14 }} />
          <div style={{ height: 1, background: INK.hairStrong }} />
          {channels.map((c) => (
            <div
              key={c.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
                borderBottom: `1px solid ${INK.hair}`,
              }}
            >
              <span className="lbl">{c.label}</span>
              <span className="mono" style={{ fontSize: 13, color: INK.text }}>
                {c.value}
              </span>
            </div>
          ))}

          <div style={{ height: 40 }} />
          <span className="lbl" style={{ color: INK.muted }}>
            {CONTACT.connectTitle}
          </span>
          <div style={{ height: 16 }} />
          <div style={{ display: "flex", gap: 10 }}>
            {CONTACT.socials.map((s) => (
              <span
                key={s}
                className="mono"
                style={{
                  fontSize: 10.5,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: INK.muted,
                  border: `1px solid ${INK.hair}`,
                  borderRadius: 2,
                  padding: "9px 14px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right — the form */}
        <div style={{ flex: 1, paddingTop: 6 }}>
          <Field label={CONTACT.fields[0]} value="Priya Raman" />
          <Field label={CONTACT.fields[1]} value="priya.raman@northwind.example" />
          <Field
            label={CONTACT.fields[2]}
            focused
            tall
            value="Hi James — we're hiring a founding product engineer and your Tempo Labs work lines up well. Any interest in a short call this week?"
          />

          <div style={{ height: 34 }} />
          <div
            className="mono"
            style={{
              height: 50,
              borderRadius: 2,
              background: INK.text,
              color: INK.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {CONTACT.submit}
          </div>

          <div style={{ height: 22 }} />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ width: 5, height: 5, background: INK.accent }} />
            <span className="mono" style={{ fontSize: 11.5, color: INK.muted }}>
              {CONTACT.success}
            </span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 10 }}>
            <span style={{ width: 5, height: 5, background: INK.faint }} />
            <span className="mono" style={{ fontSize: 11.5, color: INK.faint }}>
              {CONTACT.error}
            </span>
          </div>
        </div>
      </div>
    </Board>
  );
}
