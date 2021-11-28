import { Component } from "react";

import UserDetails from "./UserDetails";

class MultiStepForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName, email, address, city, state, zip } =
      this.state;
    const inputVals = { firstName, lastName, email, address, city, state, zip };
    return (
      <UserDetails handleChange={this.handleChange} inputVals={inputVals} />
    );
  }
}

export default MultiStepForm;
