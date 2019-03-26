import React from 'react';
import { Form, Header, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider'
class UserForm extends React.Component {
  state = { firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email,
    description: this.props.description
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...this.state, }
    this.props.update(data)
  }
  render () {
    const { firstName, lastName, email, description, } =  this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h1">Customize your profile</Header>
        <Form.Group widths="equal">
          <Form.Input
          label="First Name:"
          name="firstName"
          onChange={this.handleChange}
          value={firstName}
          />
          <Form.Input
          label="Last Name:"
          name="lastName"
          onChange={this.handleChange}
          value={lastName}
          />
        </Form.Group>
        <Form.Input
        label="Email:"
        name="email"
        onChange={this.handleChange}
        value={email}
        />
        <Form.TextArea
        label="Tell us about yourself:"
        name="description"
        onChange={this.handleChange}
        value={description}
        />
        <Form.Button color="green" inverted>Submit</Form.Button>
      </Form>
    )
  }
}
const connectedForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
        {...props} 
        firstName={value.firstName} 
        lastName={value.lastName}
        email={value.email}
        description={value.description}
        update={value.update}
        />
      )}
    </UserConsumer>
  )
}
export default connectedForm;