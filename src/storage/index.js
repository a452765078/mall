const STORAGE_KEY = 'mmall';

export default {
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}")
    },
    setItem(key, val, namespace) {
        let storage = this.getStorage();
        if (namespace) {
            storage[namespace][key] = val;
        } else {
            storage[key] = val;
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    },
    getItem(key, namespace) {
        let storage = this.getStorage();
        if (namespace) {
            return storage[namespace][key];
        } else {
            return storage[key]
        }
    },
    clear(key, namespace) {
        let storage = this.getStorage();
        if (namespace) {
            delete storage[namespace][key]
        } else {
            delete storage[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    }
}