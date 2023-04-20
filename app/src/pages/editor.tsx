import { useState, useEffect, useRef } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema } from "prosemirror-schema-basic";
import { exampleSetup } from "prosemirror-example-setup";
import { Schema } from "prosemirror-model";
import "prosemirror-menu/style/menu.css";

import { addListNodes } from "prosemirror-schema-list";

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
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
      plugins: exampleSetup({ schema: mySchema }),
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
