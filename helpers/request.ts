export async function getAllData<T = any>(url: string): Promise<T> {
    const res = await fetch(url, {
        cache: 'no-store',
    });
    return res.json();
}