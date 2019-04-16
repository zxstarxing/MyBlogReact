import Express from "express";
import MenuService from "../services/servicemenu";
const menuRouter = Express.Router();
const menuService = new MenuService();

menuRouter.get("/list", (req, res) => {
  menuService.getMenuList().then(data => {
    res.json(data);
    res.end();
  });
});

menuRouter.get("/cascader", (req, res) => {
  menuService.getMenuCascader().then(data => {
    res.json(data);
    res.end();
  });
});

menuRouter.get("/treeselect", (req, res) => {
  menuService.getMenuTreeSelect().then(data => {
    res.json(data);
    res.end();
  });
});

menuRouter.post("/", (req, res, next) => {
  let str = "";
  req.on("data", function(chunk) {
    str += chunk;
  });
  req.on("end", function() {
    if (!!str) {
      menuService.addMenu(JSON.parse(str)).then(data => {
        res.json(data);
        res.end();
      });
    }
  });
});

menuRouter.delete("/", (req, res, next) => {
  let str = "";
  req.on("data", function(chunk) {
    str += chunk;
  });
  req.on("end", function() {
    if (!!str) {
      let { Guid } = JSON.parse(str);
      if (!!Guid) {
        menuService.removeMenu(Guid).then(data => {
          console.log(data);
          res.json(data);
          res.end();
        });
      }
    }
  });
});

export default menuRouter;
