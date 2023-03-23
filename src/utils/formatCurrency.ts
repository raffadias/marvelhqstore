export function formatCurrency(value: number) {
  return new Intl.NumberFormat(
    "en-us",
    { style: "currency", currency: "USD" }
  ).format(value);
}
