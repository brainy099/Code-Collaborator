import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class SimpleCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
  }

  handleChange = event => {
    this.setState(
      { checked: event.target.checked },
      this.props.setValue(this.props.value, event.target.checked)
    );
  };

  render() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checked}
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
