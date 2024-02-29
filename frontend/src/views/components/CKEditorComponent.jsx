// CKEditorComponent.js

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditorComponent = ({ data, onChange }) => {
  if (!ClassicEditor) {
    console.error("ClassicEditor is not defined");
    return null;
  }
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={(event, editor) => {
        const content = editor.getData();
        onChange(content);
      }}
    />
  );
};

export default CKEditorComponent;
