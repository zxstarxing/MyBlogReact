import database from "../dbconfig";
import ModelMenu from "../models/modelmenu";
import ModelCascader from "../models/common/modelcascader";

let recursionList = (list, pList, allList) => {
  console.log(list);
  list.map(item => {
    let modelCasecader = new ModelCascader({
      value: item.Guid,
      label: item.Name
    }).toObject();
    let childlist = allList.filter(child => child.ParentGuid == item.Guid);
    if (childlist.length > 0) {
      recursionList(childlist, modelCasecader.children, allList);
    }
    pList.push(modelCasecader);
  });
};

class ServiceMenu {
  getMenuList() {
    return new Promise((resolve, reject) => {
      database.query("select * from menu", (error, results, fields) => {
        if (error) reject(error);
        if (!!results && results.length > 0) {
          let menuList = [];
          results.forEach(item => {
            menuList.push(new ModelMenu(item).toObject());
          });
          resolve(menuList);
          database.end();
        }
      });
    });
  }
  getMenuCascader() {
    return new Promise((resovle, reject) => {
      let cascaderModelList = [];
      this.getMenuList().then(list => {
        let domainList = list.filter(item => item.Depth == 0);
        domainList.map(item => {
          let modelCasecader = new ModelCascader({
            value: item.Guid,
            label: item.Name
          }).toObject();
          let childlist = list.filter(child => child.ParentGuid == item.Guid);
          if (childlist.length > 0) {
            recursionList(childlist, modelCasecader.children, list);
          }
          cascaderModelList.push(modelCasecader);
        });
        resovle(cascaderModelList);
      });
    });
  }
}

export default ServiceMenu;
