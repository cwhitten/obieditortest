import React, { Component } from "react";
import "./App.css";
import Form from "react-jsonschema-form";

import schema from "./appschema.json";

const onChange = ({ formData }, e) => {
  console.log("onChange", formData, e);
};
class App extends Component {
  render() {
    return (
      <div className="App" style={{ width: "700px", marginLeft: "200px" }}>
        <Form
          noValidate
          className="schemaForm"
          onChange={onChange}
          formData={{}}
          // onSubmit={onSubmit}
          schema={schema}
          uiSchema={{}}
        >
          {/* <button
            // ref={btn => {
            //   submitButton = btn;
            // }}
            className="hidden"
          /> */}
        </Form>
      </div>
    );
  }
}

export default App;
