export default function parseLocalStorageData(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return [];
  }
}
