import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
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
    ruc: "",
    name: "",
    email: "",
    owner: "",
    phone: "",
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
      ruc,
      name,
      owner,
      phone,
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
            <Grid item lg={6} md={6} sm={4} xs={12}>
              <TextValidator
                className="mb-4 w-full"
                label="RUC *"
                onChange={this.handleChange}
                type="text"
                name="ruc"
                value={ruc}
                validators={[
                  "required",
                  "minStringLength: 11",
                  "maxStringLength: 11",
                  "isNumber"
                ]}
                errorMessages={["Este campo es requerido","Debe tener 11 dígitos", "Debe tener 11 dígitos","Ingrese solamente números"]}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={8} xs={12}>
              <TextValidator
                className="mb-4 w-full"
                label="Razón social *"
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
                validators={["required"]}
                errorMessages={["Este campo es requerido"]}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-8 w-full"
                label="Gerente o propietario *"
                onChange={this.handleChange}
                type="text"
                name="owner"
                value={owner}
                validators={[
                  "required",
                  "minStringLength:6",
                  "maxStringLength: 50"
                ]}
                errorMessages={["Este campo es requerido", "Mínimo 6 caracteres", "Máximo 50 caracteres"]}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={8} xs={12}>
              <TextValidator
                className="mb-4 w-full"
                label="Correo electrónico *"
                onChange={this.handleChange}
                type="email"
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["Este campo es requerido", "El correo electrónico no es válido"]}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={4} xs={12}>
              <TextValidator
                className="mb-4 w-full"
                label="Número telefónico *"
                onChange={this.handleChange}
                type="text"
                name="phone"
                value={phone}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>

          </Grid>
        </ValidatorForm>
      </div>
    );
  }
}

export default SimpleForm;
