class LocalStorageService {
  static addItem(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  static getItem(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}

export default LocalStorageService;
