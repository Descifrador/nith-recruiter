import { Component } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";

class UserDetails extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <Form>
            
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label className="label">Company Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputVals.firstName}
                name="firstName"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Label className="label">Last Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.props.inputVals.lastName}
                name="lastName"
                required
                onChange={this.props.handleChange}
              />
            </Form.Group>
         

          <Form.Group controlId="formEmail">
            <Form.Label className="label">Email Address</Form.Label>
            <Form.Control
              type="email"
              defaultValue={this.props.inputVals.email}
              name="email"
              required
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.saveAndContinue}>
            Next
          </Button>
        </Form>
      </Container>
    );
  }
}

export default UserDetails;