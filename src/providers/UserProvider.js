import React from 'react';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = { 
    firstName: "Jake",
    lastName: "Bills",
    email: "test@test.com",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere provident quidem accusamus. Rerum facilis quo ipsum dolores ipsam nihil sequi blanditiis vero, omnis quos maxime possimus aliquam, exercitationem voluptatibus.",
    update: (data) => this.update(data),
   }
  update = (data) => {
    this.setState({ ...data, })
  }
  render() {
    return (
      <UserContext.Provider value={this.state} >
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider