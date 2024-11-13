import { formatDistanceToNowStrict } from "date-fns";

export function formatDate(
  dateString,
  options = {
    year: "numeric",
    day: "2-digit",
    month: "long",
  }
) {
  if (!dateString) return "-";

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", options);
}

export function getTimeAgo(date) {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
  });
}

export function formatCurrency(val) {
  const value = String(val);
  const number = parseFloat(
    value.replace(/₦|,/g, "").trim()
  );
  const formattedNumber = number.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return formattedNumber;
}
