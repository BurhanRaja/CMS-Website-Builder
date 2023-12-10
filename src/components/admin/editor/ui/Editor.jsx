// components/custom-editor.js

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true,
      },
      {
        name: "ul",
        classes: true,
        styles: true,
      },
    ],
  },
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "imageUpload",
      "imageInsert",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
      "sourceEditing",
    ],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};

function CustomEditor({ initialData, setContent }) {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={initialData}
      onChange={(event, editor) => {
        const data = editor.getData();
        setContent(data);
        console.log({ event, editor, data });
      }}
    />
  );
}

export default CustomEditor;
