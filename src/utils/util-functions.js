import { formatDistanceToNowStrict } from 'date-fns';

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
  return formatDistanceToNowStrict(new Date(date), { addSuffix: true });
}
