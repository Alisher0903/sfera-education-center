

export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Fetch failed');
  }

  return res.json();
}
