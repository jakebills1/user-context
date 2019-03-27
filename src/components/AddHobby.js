import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import { HobbyConsumer, } from '../providers/HobbyProvider';
class AddHobby extends React.Component {
  state = { name: "", avatar: "", description: ""}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {...this.state}
    this.props.add(data)
    this.setState({ name: "", description: "", avatar: ""})
    this.props.toggle()
  }
  render() {
    const { name, avatar, description, } =  this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
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

const ConnectedForm = (props) => (
  <HobbyConsumer>
    {value => (
      <AddHobby
      {...props}
      add={value.update}
      />
    )}
  </HobbyConsumer>
)
export default ConnectedForm;


        