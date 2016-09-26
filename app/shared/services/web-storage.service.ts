/*
 * Web storage manager
 * sessionStorage: Tab scope, deleted when the tab is closed
 * localStorage: Browser scope, persistence
 */
export class WebStorageService {

    public getItem(key: string): any {
        let storage = (sessionStorage.getItem(key))? sessionStorage.getItem(key): localStorage.getItem(key);
        return JSON.parse(storage);
    }

    public setItem(key: string, data: any, persistent: boolean = false): void {

        this.removeItem(key);

        if(persistent) {
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            sessionStorage.setItem(key, JSON.stringify(data));
        }
    }

    public removeItem(key: string): void {
        sessionStorage.removeItem(key);
        localStorage.removeItem(key);
    }

    public clear(): void {
        sessionStorage.clear();
        localStorage.clear();
    }
}