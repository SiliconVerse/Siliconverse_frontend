import { useEffect, useState } from 'react';

export default function useMediaQuery(query) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const onChange = (event) => {
      setValue(event.matches);
    };

    const result = window.matchMedia(query);

    result.addEventListener('change', onChange);

    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);
  return !!value;
}
