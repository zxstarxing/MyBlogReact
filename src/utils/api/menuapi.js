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
  getCascader() {
    return new Promise((resolve, reject) => {
      Axios.get(this.urlPrefix + "/menu/cascader")
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
  getTreeSelect() {
    return new Promise((resolve, reject) => {
      Axios.get(this.urlPrefix + "/menu/treeselect")
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
  addMenu({ Guid, ParentGuid, Title, Description, IsStatus }) {
    return new Promise((resolve, reject) => {
      Axios.post(this.urlPrefix + "/menu/", {
        Guid,
        ParentGuid,
        Title,
        Description,
        IsStatus
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
  removeMenu(guid) {
    return new Promise((resolve, reject) => {
      return Axios.delete(this.urlPrefix + `/menu/`, {
        data: {
          Guid: guid
        }
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
}
export default MenuApi;
