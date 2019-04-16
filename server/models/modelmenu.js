class ModelMenu {
  constructor({
    id,
    guid,
    parentguid,
    name,
    description,
    router,
    depth,
    isstatus,
    createtime
  }) {
    this.id = id;
    this.guid = guid;
    this.parentguid = parentguid;
    this.name = name;
    this.description = description;
    this.router = router;
    this.depth = depth;
    this.isstatus = isstatus;
    this.createtime = createtime;
  }
  toObject() {
    return {
      Id: this.id,
      Guid: this.guid,
      ParentGuid: this.parentguid,
      Name: this.name,
      Description: this.description,
      Router: this.router,
      Depth: this.depth,
      IsStatus: this.isstatus,
      CreateTime: this.createtime
    };
  }
}

export default ModelMenu;
