
export class SessionStorageHelper{
    static setValue(key: string, value: any): void {
        sessionStorage.setItem(key,value)
    }

    static getValue(key: string): any {
        return sessionStorage.getItem(key);
    }

    static removeValue(key: string): any {
        return sessionStorage.removeItem(key)
    }
}