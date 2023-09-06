class LocalStorageManager {
    setItem(key: string, value: any): boolean {
        try {
            // Check if the value exceeds the local storage size limit
            if (JSON.stringify(value).length > 5 * 1024 * 1024) {
                throw new Error("Value exceeds local storage size limit.");
            }

            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("Error while setting item in local storage:", error);
            return false;
        }
    }

    getItem<T>(key: string): T | null {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error("Error while getting item from local storage:", error);
            return null;
        }
    }

    removeItem(key: string): boolean {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error("Error while removing item from local storage:", error);
            return false;
        }
    }
}

const localStorageManager = new LocalStorageManager();

export default localStorageManager;
