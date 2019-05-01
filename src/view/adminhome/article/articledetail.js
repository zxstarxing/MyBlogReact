import "./articledetail.css";
import "highlight.js/styles/atom-one-dark.css";
import React, { Component } from "react";
import { Form, Input } from "antd";
import marked, { Renderer } from "marked";
import highlightjs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
highlightjs.registerLanguage("javascript", javascript);

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
let escapeForHTML = input =>
  input.replace(/([&<>'"])/g, char => escapeMap[char]);
const { TextArea } = Input;
class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdContent: "",
      mdTextarea: ""
    };
  }
  componentDidMount() {
    const renderer = new Renderer();
    renderer.code = (code, language) => {
      const validLang = !!(language && highlightjs.getLanguage(language));
      const highlighted = validLang
        ? highlightjs.highlight(language, code).value
        : escapeForHTML(code);
      return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
    };
    marked.setOptions({
      renderer: renderer,
      highlight: function(code) {
        return highlightjs.highlightAuto(code).value;
      },
      langPrefix: "hljs",
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
  }
  handleMarkdownChange(e) {
    let { value } = e.target;
    this.setState({
      mdTextarea: value,
      mdContent: value
    });
  }
  render() {
    return (
      <>
        <Form>
          <Form.Item label="文章标题">
            <Input placeholder="请输入文章标题" />
          </Form.Item>
          <Form.Item label="文章副标题">
            <Input placeholder="请输入文章副标题" />
          </Form.Item>
          <Form.Item label="文章内容">
            <div className="divMarkdown">
              <TextArea
                rows={12}
                className="left"
                onChange={this.handleMarkdownChange.bind(this)}
                value={this.state.mdTextarea}
              />
              <div
                className="right"
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.mdContent)
                }}
              />
            </div>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default ArticleDetail;
