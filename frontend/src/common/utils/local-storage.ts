export function getLocalStorageItem<T>(key: string, defaultValue: T): T {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : defaultValue;
}

export function setLocalStorageItem(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
