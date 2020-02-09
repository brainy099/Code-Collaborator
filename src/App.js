import React, { Component } from "react";
import "./App.css";
import AceEditor from "react-ace";
import fire from "./fire";
import SimpleMenu from "./component/Simple-menu";
import SimpleCheckbox from "./component/Simple-Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import "typeface-roboto";

import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-terminal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      theme: "monokai",
      themes: [
        "monokai",
        "github",
        "twilight",
        "tomorrow",
        "kuroir",
        "terminal"
      ],
      language: "javascript",
      languages: ["html", "css", "javascript", "typescript", "java", "python"],
      enableLiveAutocompletion: false,
      enableSnippets: false,
      enableBasicAutocompletion: false,
      showLineNumbers: false
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  setValue = (key, val) => {
    this.setState({
      [key]: val
    });
  };

  getData = () => {
    fire
      .database()
      .ref("/editor")
      .on("value", snapshot => {
        this.setState({
          message: snapshot.val().message
        });
      });
  };

  onChange = e => {
    fire
      .database()
      .ref("/editor")
      .set({
        message: e
      });
  };

  render() {
    const { message, theme, themes, language, languages, enableLiveAutocompletion, enableBasicAutocompletion, enableSnippets,showLineNumbers } = this.state;
    return (
      <>
        <h1 className="header">CODE COLLABORATOR</h1>
        <div className="container">
          <AceEditor
            mode={language}
            theme={theme}
            onChange={this.onChange}
            value={message}
            fontSize={14}
            setOptions={{
              enableBasicAutocompletion: enableBasicAutocompletion,
              enableLiveAutocompletion: enableLiveAutocompletion,
              enableSnippets: enableSnippets,
              showLineNumbers: showLineNumbers
              }}
          />
          <SimpleMenu type="theme" children={themes} setValue={this.setValue} />
          <SimpleMenu
            type="language"
            children={languages}
            setValue={this.setValue}
          />
          <div className="checkbox">
          <FormLabel component="legend">
            OPTIONS
          </FormLabel>
            <SimpleCheckbox
              setValue={this.setValue}
              label="Enable Live Autocomplete"
              value="enableLiveAutocompletion"
              status={enableLiveAutocompletion}
            />
            <SimpleCheckbox
              setValue={this.setValue}
              label="Enable Snippets"
              value="enableSnippets"
              status={enableSnippets}
            />
            <SimpleCheckbox
              setValue={this.setValue}
              label="Enable Basic Autocompletion"
              value="enableBasicAutocompletion"
              status={enableBasicAutocompletion}
            />
            <SimpleCheckbox
              setValue={this.setValue}
              label="Show Line Numbers"
              value="showLineNumbers"
              status={showLineNumbers}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
