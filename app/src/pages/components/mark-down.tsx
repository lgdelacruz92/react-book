import MarkdownIt from "markdown-it";
import { ReactNode } from "react";

const md = new MarkdownIt();

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  const html = md.render(content);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
