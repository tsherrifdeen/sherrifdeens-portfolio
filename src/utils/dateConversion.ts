export function formatDate(
  dateTime: string | Date,
  locale: string = "en",
): string {
  const date = typeof dateTime === "string" ? new Date(dateTime) : dateTime;

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
