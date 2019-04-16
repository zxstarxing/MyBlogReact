import Express from "express";
import MenuService from "../services/servicemenu";
let menuRouter = Express.Router();
let menuService = new MenuService();

menuRouter.get("/list", (req, res) => {
  menuService.getMenuList().then(data => {
    res.json(data);
    res.end();
  });
});
export default menuRouter;

menuRouter.get("/cascader", (req, res) => {
  menuService.getMenuCascader().then(data => {
    res.json(data);
    res.end();
  });
});
