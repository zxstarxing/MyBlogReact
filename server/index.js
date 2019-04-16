import express from "express";
import MenuRouter from "./routers/menurouter";
const app = express();

/*允许跨域访问 */
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use("/menu", MenuRouter);

app.listen(3200, () => console.log("Example app listening on port 3200!"));
