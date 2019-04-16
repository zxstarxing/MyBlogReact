import pool from "../dbconfig";
import ModelMenu from "../models/modelmenu";
import ModelCascader from "../models/common/modelcascader";
import ModelTreeSelect from "../models/common/modeltreeselect";
import UUID from "node-uuid";

let recursionListCascader = (list, pList, allList) => {
  list.map(item => {
    let modelCasecader = new ModelCascader({
      value: item.Guid,
      label: item.Name
    }).toObject();
    let childlist = allList.filter(child => child.ParentGuid == item.Guid);
    if (childlist.length > 0) {
      recursionListCascader(childlist, modelCasecader.children, allList);
    } else {
      delete modelCasecader.children;
    }
    pList.push(modelCasecader);
  });
};
let recursionListTreeSelect = (list, pList, allList) => {
  list.map(item => {
    let modelTreeSelect = new ModelTreeSelect({
      value: item.Guid,
      title: item.Name
    }).toObject();
    let childlist = allList.filter(child => child.ParentGuid == item.Guid);
    if (childlist.length > 0) {
      recursionListTreeSelect(childlist, modelTreeSelect.children, allList);
    } else {
      delete recursionListTreeSelect.children;
    }
    pList.push(modelTreeSelect);
  });
};

class ServiceMenu {
  getMenuEntityByGuid(guid) {
    return new Promise((resolve, reject) => {
      pool.getConnection((error, conneciton) => {
        if (error) reject(error);
        conneciton.query(
          `select * from menu where guid = ${conneciton.escape(guid)}`,
          (error, results, fields) => {
            if (error) reject(error);
            if (!!results && results.length > 0) {
              let menuList = [];
              results.forEach(item => {
                menuList.push(new ModelMenu(item).toObject());
              });
              resolve(menuList[0]);
              conneciton.release();
            }
          }
        );
      });
    });
  }
  getMenuEntityById(id) {
    return new Promise((resolve, reject) => {
      pool.getConnection((error, conneciton) => {
        if (error) reject(error);
        conneciton.query(
          `select * from menu where id = ${conneciton.escape(id)}`,
          (error, results, fields) => {
            if (error) reject(error);
            if (!!results && results.length > 0) {
              let menuList = [];
              results.forEach(item => {
                menuList.push(new ModelMenu(item).toObject());
              });
              resolve(menuList[0]);
              conneciton.release();
            }
          }
        );
      });
    });
  }
  getMenuList() {
    return new Promise((resolve, reject) => {
      pool.getConnection((error, conneciton) => {
        if (error) reject(error);
        conneciton.query("select * from menu", (error, results, fields) => {
          if (error) reject(error);
          if (!!results && results.length > 0) {
            let menuList = [];
            results.forEach(item => {
              menuList.push(new ModelMenu(item).toObject());
            });
            resolve(menuList);
            conneciton.release();
          }
        });
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
            recursionListCascader(childlist, modelCasecader.children, list);
          }
          cascaderModelList.push(modelCasecader);
        });
        resovle(cascaderModelList);
      });
    });
  }
  getMenuTreeSelect() {
    return new Promise((resovle, reject) => {
      let treeSelectModelList = [];
      this.getMenuList().then(list => {
        let domainList = list.filter(item => item.Depth == 0);
        domainList.map(item => {
          let modelTreeSelect = new ModelTreeSelect({
            value: item.Guid,
            title: item.Name
          }).toObject();
          let childlist = list.filter(child => child.ParentGuid == item.Guid);
          if (childlist.length > 0) {
            recursionListCascader(childlist, modelTreeSelect.children, list);
          }
          treeSelectModelList.push(modelTreeSelect);
        });
        resovle(treeSelectModelList);
      });
    });
  }
  addMenu({ ParentGuid, Title, Description, IsStatus }) {
    return new Promise((resolve, reject) => {
      this.getMenuEntityByGuid(ParentGuid).then(entity => {
        pool.getConnection((error, conneciton) => {
          if (error) reject(error);
          let addSql =
            "INSERT INTO `menu` (guid,parentguid,name,description,router,depth,isstatus) VALUES (?,?,?,?,?,?,?);";
          let addPar = [
            UUID.v4(),
            ParentGuid,
            Title,
            Description,
            "",
            entity.Depth + 1,
            IsStatus
          ];
          conneciton.query(addSql, addPar, (error, results, fields) => {
            if (error) reject(error);
            if (!!results) {
              this.getMenuEntityById(results.insertId).then(data => {
                resolve(data);
              });
            }
            conneciton.release();
          });
        });
      });
    });
  }
  removeMenu(guid) {
    return new Promise((resolve, reject) => {
      let deleteSql = "DELETE FROM `menu` WHERE guid='" + guid + "';";
      pool.getConnection((error, conneciton) => {
        if (error) reject(error);
        conneciton.query(deleteSql, (error, results, fields) => {
          if (error) reject(error);
          if (!!results) {
            if (results.affectedRows > 0) {
              resolve("success");
            }
          }
        });
      });
    });
  }
}

export default ServiceMenu;
