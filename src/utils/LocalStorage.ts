export class LocalStorage {
  static getValue(key: string) {
    return localStorage.getItem(key);
  }

  static setValue(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}
