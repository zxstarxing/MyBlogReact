import Axios from "axios";
import DomainUrl from "../config/config";
class MenuApi {
  constructor() {
    this.urlPrefix = DomainUrl;
  }
  getList() {
    return new Promise((resolve, reject) => {
      Axios.get(this.urlPrefix + "/menu/list")
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
}
export default MenuApi;
