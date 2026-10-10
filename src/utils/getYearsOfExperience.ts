import { CAREER_START } from '@/data/profile'

/** Whole years since the career start date, so the number stays correct without edits. */
export function getYearsOfExperience(now: Date = new Date()) {
  let years = now.getFullYear() - CAREER_START.getFullYear()
  const beforeAnniversary =
    now.getMonth() < CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() && now.getDate() < CAREER_START.getDate())

  if (beforeAnniversary) years -= 1
  return Math.max(years, 0)
}
