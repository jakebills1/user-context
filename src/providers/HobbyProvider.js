import React from 'react';

const HobbyContext = React.createContext();

export const HobbyConsumer = HobbyContext.Consumer;

class HobbyProvider extends React.Component {
  state = { hobbies: [
    { name: "Basketball", 
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    avatar: "sports"
    },
    {
      name: "Sleeping",
      description: "Repellendus rem ipsum pariatur explicabo aspernatur obcaecati iusto nihil facilis, nesciunt delectus molestiae neque quasi.",
      avatar: "bed"
    },
  ],
  update: (data) => this.update(data),
}
  update = (data) => {
    this.setState({ hobbies: [...this.state.hobbies, data]})
  }
  render() {
    return (
      <HobbyContext.Provider value={this.state} >
        {this.props.children}
      </HobbyContext.Provider>
    )
  }
}

export default HobbyProvider;