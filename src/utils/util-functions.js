import { format, formatDistanceToNowStrict } from 'date-fns';

export function formatDate(
  dateString,
  options = {
    year: 'numeric',
    day: '2-digit',
    month: 'long',
  }
) {
  if (!dateString) return '-';

  const date = new Date(dateString);

  return date.toLocaleDateString('en-US', options);
}

export function getTimeAgo(date) {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
  });
}

export function formatCurrency(val) {
  const value = String(val);
  const number = parseFloat(value.replace(/₦|,/g, '').trim());
  const formattedNumber = number.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });

  return formattedNumber;
}
// add appropriate suffix to number
// i.e 10,000 will return 10k
export function formatNumber(num) {
  if (num < 1000) return num.toString();

  const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

  return formatter.format(num);
}

const getOrdinal = (day) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];

  // take the last two digits
  const value = day % 100;

  return day + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
};

export const formatCustomDate = (datetimeString) => {
  const date = new Date(datetimeString);

  const day = getOrdinal(parseInt(format(date, 'd')));

  const month = format(date, 'MMM');

  const time = format(date, 'h:mmaaa');

  return `${day} ${month} at ${time}`;
};
