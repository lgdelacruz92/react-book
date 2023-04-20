import Markdown from "./components/mark-down";

function MarkDownEditor() {
  const content = "# Hello, world!";

  return (
    <div>
      <h1>My Page</h1>
      <Markdown content={content} />
    </div>
  );
}

export default MarkDownEditor;
