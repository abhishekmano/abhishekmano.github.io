import React from "react";

/**
 * Renders the light markup allowed in content/ files, so those files can stay
 * plain strings instead of JSX. Two markers are supported:
 *
 *   **bold**   -> <b>
 *   blank line -> paragraph break
 *
 * Keeping content as strings is the point: adding or reworking copy is a text
 * edit in content/, with no JSX, no imports and no risk of breaking a component.
 *
 * Paragraph spacing is owned here rather than by the caller. Tailwind's preflight
 * zeroes <p> margins, so sibling paragraphs would otherwise butt together and a
 * blank line in a content file would appear to do nothing -- which is exactly the
 * kind of silent failure this module exists to prevent. The wrapper is only added
 * when there is more than one paragraph, so single-paragraph callers render an
 * unwrapped <p> and their own layout is untouched.
 *
 * @param {{ text: string, className?: string }} props
 */
export function RichText({ text, className }) {
  const paragraphs = String(text)
    .trim()
    .split(/\n\s*\n/);

  const rendered = paragraphs.map((paragraph, i) => (
    <p key={i} className={className}>
      {renderBold(paragraph)}
    </p>
  ));

  if (rendered.length === 1) return rendered[0];

  return <div className="space-y-4">{rendered}</div>;
}

/**
 * Splits on **…** and wraps the captured runs in <b>. The regex keeps its
 * capture group, so split() returns [plain, bold, plain, bold, …] and the odd
 * indices are the emphasised runs.
 *
 * @param {string} text
 */
function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((chunk, i) =>
    i % 2 === 1 ? (
      <b key={i} className="text-ink font-semibold">
        {chunk}
      </b>
    ) : (
      chunk
    ),
  );
}

export default RichText;
