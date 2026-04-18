import { useEffect } from 'react';

const BASE = 'Energie-Technik-Center Loy';

export function useMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} – ${BASE}` : `${BASE} GmbH & Co. KG`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [title, description]);
}
