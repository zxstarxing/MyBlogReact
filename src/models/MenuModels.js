class MenuModel {
  constructor({ Guid, ParentGuid, Title, Description, IsStatus }) {
    this.Guid = Guid;
    this.ParentGuid = ParentGuid;
    this.Title = Title;
    this.Description = Description;
    this.IsStatus = IsStatus;
  }
  toObject() {
    return {
      Guid: this.Guid,
      ParentGuid: this.ParentGuid,
      Title: this.Title,
      Description: this.Description,
      IsStatus: this.IsStatus
    };
  }
}
