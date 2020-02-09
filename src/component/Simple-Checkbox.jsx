import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class SimpleCheckbox extends Component {

  handleChange = event => {
    this.props.setValue(this.props.value, event.target.checked)
  };

  render() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.props.status}
            onChange={this.handleChange}
            value={this.props.value}
            color="primary"
          />
        }
        label={this.props.label}
      />
    );
  }
}

export default SimpleCheckbox;
