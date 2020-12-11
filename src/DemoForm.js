import { Card } from "@material-ui/core";
import React, { Component } from "react";

import SimpleForm from "./app/views/material-kit/forms/SimpleForm";
import StepperForm from "./app/views/material-kit/forms/StepperForm";

class DemoForm extends Component {
  render() {
    return (
      <>
        <div className="m-sm-30">
          <Card className="px-6 pt-2 pb-4">
            <StepperForm />
          </Card>
        </div>
      </>
    );
  }
}

export default DemoForm;
