class ModelTreeSelect {
  constructor({ value, title }) {
    this.value = value;
    this.title = title;
    this.key = value;
    this.children = [];
  }
  toObject() {
    return {
      key: this.key,
      value: this.value,
      title: this.title,
      children: this.children
    };
  }
  setChildren({ value, title }) {
    this.children.push(new CascaderModel({ value, title }.toObject()));
  }
}
export default ModelTreeSelect;
