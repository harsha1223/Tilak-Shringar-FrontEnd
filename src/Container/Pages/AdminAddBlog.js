import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "../../helpers/axios";

export default function AdminAddBlog(props) {
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [content, setContent] = useState("");

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  const handleBlogSubmit = () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("coverImg", coverImg);

    axios
      .post("/blog", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="SmallBlogUp">
        <div className="headingPopUp">
          <div className="adminClose" onClick={props.closeProduct}>
            +
          </div>
          <p className="adminPopHeading">Add Blog</p>
        </div>
        <div className="detailBlogFill" style={{ padding: "1em" }}>
          <div className="productDetailsCol">
            <Input
              type="text"
              label="Blog Title"
              placeholder="Enter Blog Title here"
              style={{
                marginBottom: "2em",
                marginRight: "1em",
              }}
              onChange={({ target }) => setTitle(target.value)}
            />

            <Input
              type="file"
              label="Cover Image"
              name="coverImg"
              onChange={({ target }) => setCoverImg(target.files[0])}
            />

            <Editor
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks fullscreen",
                  "insertdatetime media table paste code help",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={handleEditorChange}
            />

            <Button
              primary
              style={{ marginTop: "1em" }}
              onClick={handleBlogSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
