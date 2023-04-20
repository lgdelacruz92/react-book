import { useState, useEffect, useRef } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { Schema } from "prosemirror-model";

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks,
});

function Editor() {
  const editorRef = useRef(null);
  const [editorView, setEditorView] = useState<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }

    const state = EditorState.create({
      schema: mySchema,
    });
    const view = new EditorView(editorRef.current, {
      state,
    });
    setEditorView(view);

    return () => {
      view.destroy();
    };
  }, [editorRef.current]);

  return <div ref={editorRef} id="editor-view" />;
}

export default Editor;
