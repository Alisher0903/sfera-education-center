export async function getAllData<T = any>(url: string): Promise<T | null> {
    try {
        const res = await fetch(url, {
            cache: "no-store",
        });
        if (!res.ok) {
            console.error(`Error fetching ${url}:`, res.status);
            return null;
        }
        return await res.json();
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return null;
    }
}
