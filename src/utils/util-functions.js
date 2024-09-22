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
