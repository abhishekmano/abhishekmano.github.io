/**
 * Dates helpers.
 *
 * Years of experience is derived rather than hardcoded, so the site does not need
 * an edit every year. Set `careerStart` in content/site.js once.
 */

/**
 * Whole years elapsed since an ISO date.
 *
 * @param {string} isoDate e.g. "2021-08-01"
 * @param {Date} [now] Injectable for testing.
 * @returns {number}
 */
export function yearsSince(isoDate, now = new Date()) {
  const start = new Date(isoDate);

  let years = now.getFullYear() - start.getFullYear();

  // Not yet reached the anniversary this year -> one fewer completed year.
  const monthDiff = now.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years -= 1;
  }

  return Math.max(0, years);
}
