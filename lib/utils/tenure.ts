/**
 * Tenure Calculation Utility
 * Calculates and formats employment/experience duration
 */

export interface TenureResult {
  display: string // "Mar 2025 – Present · 8 months"
  months: number
  isPresent: boolean
}

/**
 * Parse month and year from date strings like "March 2025", "Mar 2025", or "January 2020"
 */
function parseDate(dateString: string): Date {
  const monthMap: Record<string, number> = {
    january: 0, jan: 0,
    february: 1, feb: 1,
    march: 2, mar: 2,
    april: 3, apr: 3,
    may: 4,
    june: 5, jun: 5,
    july: 6, jul: 6,
    august: 7, aug: 7,
    september: 8, sep: 8, sept: 8,
    october: 9, oct: 9,
    november: 10, nov: 10,
    december: 11, dec: 11,
  }

  const parts = dateString.trim().split(' ')
  if (parts.length !== 2) {
    throw new Error(`Invalid date format: ${dateString}`)
  }

  const [monthStr, yearStr] = parts
  const month = monthMap[monthStr.toLowerCase()]
  const year = parseInt(yearStr, 10)

  if (month === undefined || isNaN(year)) {
    throw new Error(`Invalid date format: ${dateString}`)
  }

  return new Date(year, month, 1)
}

/**
 * Format a date object to abbreviated month name
 */
function formatMonthAbbr(date: Date): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months[date.getMonth()]
}

/**
 * Calculate the number of months between two dates
 */
function calculateMonths(startDate: Date, endDate: Date): number {
  const yearsDiff = endDate.getFullYear() - startDate.getFullYear()
  const monthsDiff = endDate.getMonth() - startDate.getMonth()
  
  // Total months, adding 1 because we count both start and end months
  return yearsDiff * 12 + monthsDiff + 1
}

/**
 * Format duration in months to human-readable string
 */
function formatDuration(months: number): string {
  if (months === 1) return '1 month'
  if (months < 12) return `${months} months`
  
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  
  if (remainingMonths === 0) {
    return years === 1 ? '1 year' : `${years} years`
  }
  
  const yearText = years === 1 ? '1 year' : `${years} years`
  const monthText = remainingMonths === 1 ? '1 month' : `${remainingMonths} months`
  
  return `${yearText} ${monthText}`
}

/**
 * Calculate tenure and format display string
 * @param startDate - Start date in format "March 2025" or "Mar 2025"
 * @param endDate - End date or "Present"
 * @returns TenureResult with display string, months count, and isPresent flag
 * 
 * @example
 * calculateTenure('March 2025', 'Present')
 * // Returns: { display: "Mar 2025 – Present · 8 months", months: 8, isPresent: true }
 * 
 * @example
 * calculateTenure('January 2025', 'March 2025')
 * // Returns: { display: "Jan 2025 – Mar 2025 · 3 months", months: 3, isPresent: false }
 */
export function calculateTenure(
  startDate: string,
  endDate: string | 'Present'
): TenureResult {
  const start = parseDate(startDate)
  const isPresent = endDate === 'Present'
  const end = isPresent ? new Date() : parseDate(endDate)
  
  const months = calculateMonths(start, end)
  const duration = formatDuration(months)
  
  const startFormatted = `${formatMonthAbbr(start)} ${start.getFullYear()}`
  const endFormatted = isPresent ? 'Present' : `${formatMonthAbbr(end)} ${end.getFullYear()}`
  
  const display = `${startFormatted} – ${endFormatted} · ${duration}`
  
  return {
    display,
    months,
    isPresent,
  }
}

/**
 * Format tenure display string only (shorthand)
 * @param startDate - Start date in format "March 2025" or "Mar 2025"
 * @param endDate - End date or "Present"
 * @returns Formatted display string
 */
export function formatTenureDisplay(
  startDate: string,
  endDate: string | 'Present'
): string {
  return calculateTenure(startDate, endDate).display
}

