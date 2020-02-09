import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default class RadioButtonsGroup extends Component {
  handleChange = event => {
    this.props.setValue(this.props.type, event.target.value);
  };

  render() {
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {this.props.type.toUpperCase()}
          </FormLabel>
          <RadioGroup
            aria-label={this.props.type}
            name={this.props.type}
            onChange={this.handleChange}
          >
            {this.props.children.map(val => {
              return (
                <FormControlLabel
                  value={val}
                  control={<Radio color="primary"/>}
                  label={val.charAt(0).toUpperCase() + val.slice(1)}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}
