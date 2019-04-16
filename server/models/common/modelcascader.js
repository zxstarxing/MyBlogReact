class ModelCascader {
  constructor({ value, label }) {
    this.value = value;
    this.label = label;
    this.children = [];
  }
  toObject() {
    return {
      value: this.value,
      label: this.label,
      children: this.children
    };
  }
  setChildren({ value, label }) {
    this.children.push(new CascaderModel({ value, label }.toObject()));
  }
}
export default ModelCascader;
