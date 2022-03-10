import http from "./Http-command";

class Countries {
  getAll() {
    return http.get(`/all`);
  }
  getItem(itemName) {
    return http.get(`/name/${itemName}?fullText=true`);
  }
}
export default new Countries();
