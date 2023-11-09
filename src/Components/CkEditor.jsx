import React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";

const MyCkeditor = ({ html, sethtml }) => {
  return (
    <div>
      <div className="App">
        <h2>Using CKEditor 5 from online builder in React</h2>
        <CKEditor
          editor={Editor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            console.log(editor.getData())
            sethtml(editor.getData());
          }}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {
            // console.log('Focus.', editor);
          }}
        />
      </div>
    </div>
  );
};

export default MyCkeditor;
