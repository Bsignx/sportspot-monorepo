export function hasDaysPassed(daysToWait: number): boolean {
  const lastVisit: string | null = localStorage.getItem('lastVisit')
  const now: number = new Date().getTime()
  const daysToWaitInMs: number = daysToWait * 24 * 60 * 60 * 1000

  if (!lastVisit || now - Number(lastVisit) > daysToWaitInMs) {
    localStorage.setItem('lastVisit', String(now))
    return true
  }

  return false
}
