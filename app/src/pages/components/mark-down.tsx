import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";
import { border } from "@chakra-ui/react";

const md = new MarkdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      console.log(hljs.highlight(str, { language: lang }).value);
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ""; // use external default escaping
  },
});

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  const html = md.render(content);

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid lightgray",
      }}
      className="markdown-it-output"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
