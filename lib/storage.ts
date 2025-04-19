export const getItem = <T>(key: string): T | null => {
    if (typeof window === "undefined") return null;
    const value = localStorage.getItem(key);
    return value ? value as T : null;
};

export const setItem = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};
