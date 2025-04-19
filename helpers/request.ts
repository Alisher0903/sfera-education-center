export async function getAllData(url: string) {
    const res = await fetch(url, {
        cache: 'no-store',
    });
    return res.json();
}