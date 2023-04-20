import MarkdownIt from "markdown-it";
import he from "he";

const md = new MarkdownIt({ html: true });

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  console.log(content);
  const html = md.render(he.decode(content));

  return (
    <div
      className="markdown-it-output"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
