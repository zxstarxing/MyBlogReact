import { observable } from "mobx";

class ArticleModel {
  @observable Key;
  @observable Title;
  @observable Subtitle;
  @observable Content;
  @observable CreateTime;
  constructor({
    Title = "",
    Subtitle = "",
    Content = "",
    CreateTime = new Date()
  } = {}) {
    this.Key = Math.random();
    this.Title = Title;
    this.Subtitle = Subtitle;
    this.Content = Content;
    this.CreateTime = CreateTime;
  }
  toObject() {
    return {
      Title: this.Title,
      Subtitle: this.Subtitle,
      Content: this.Content,
      CreateTime: this.CreateTime
    };
  }
}
export default ArticleModel;
