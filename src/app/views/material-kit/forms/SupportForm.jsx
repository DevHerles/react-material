import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SimpleTable from "../tables/SimpleTable.jsx";
import {
  Button,
  Icon,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

class SimpleForm extends Component {
  state = {
    description: "",
    quantity: 0,
    times: "",
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = event => {
    // console.log("submitted");
    // console.log(event);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    // console.log(date);

    this.setState({ date });
  };

  render() {
    let {
      description,
      name,
      quantity,
      times,
      email
    } = this.state;
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <Grid container spacing={3}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <TextValidator
                className="mb-4 w-full"
                label="Descripción *"
                onChange={this.handleChange}
                type="text"
                name="description"
                value={description}
                validators={["required"]}
                errorMessages={["Este campo es requerido"]}
              />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <TextValidator
                className="mb-4 w-full"
                label="Cantidad *"
                onChange={this.handleChange}
                type="text"
                name="quantity"
                value={quantity}
                validators={["required"]}
                errorMessages={["Este campo es requerido"]}
              />
            </Grid>
            <Grid item lg={2} md={4} sm={4} xs={10}>
              <TextValidator
                className="mb-4 w-full"
                label="Número de veces *"
                onChange={this.handleChange}
                type="text"
                name="times"
                value={times}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
            <Grid item lg={1} md={2} sm={2} xs={2}>
              <IconButton aria-label="add">
                <AddIcon />
              </IconButton>
            </Grid>

          </Grid>
          <Grid container spacing={3}>
            <SimpleTable />
          </Grid>
        </ValidatorForm>
      </div>
    );
  }
}

export default SimpleForm;
