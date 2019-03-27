import React from 'react';
import { Form, Header } from 'semantic-ui-react';
class AddHobby extends React.Component {
  state = { name: "", avatar: "", description: ""}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  render() {
    const { name, avatar, description, } =  this.state;
    return (
      <Form>
        <Header as="h2">Add a Hobby</Header>
        <Form.Group widths="equal" >
          <Form.Input
          label="Name:"
          name="name"
          placeholder="Your Hobby's Name"
          onChange={this.handleChange}
          value={name}
          />
          <Form.Input
          label="Avatar:"
          name="avatar"
          placeholder="Avatar to display"
          onChange={this.handleChange}
          value={avatar}
          />
        </Form.Group>
          <Form.TextArea 
          label="Description"
          name="description"
          placeholder="Enter a short description of your hobby..."
          onChange={this.handleChange}
          value={description}
          />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
export default AddHobby;


        