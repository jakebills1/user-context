import React from 'react';
import AddHobby from './AddHobby';
import { List, Header, Image, Button, Icon, } from 'semantic-ui-react';
import { HobbyConsumer, } from '../providers/HobbyProvider';
import { Link, } from 'react-router-dom';
class Hobbies extends React.Component {
  state = { showForm: true, }
  toggleForm = () => this.setState({ showForm: !this.state.showForm})
  render() {
    const { showForm, } = this.state;
    return (
      <>
        <List celled>
          <Header as="h1">Your Hobbies</Header>
          <HobbyConsumer>
            {value => (
              <>
                {value.hobbies.map( hobby => (
                  <List.Item>
                    <Image avatar src={`https://loremflickr.com/320/240/${hobby.avatar}`} />
                    <List.Content>
                      <List.Header>{hobby.name}</List.Header>
                      <List.Description>{hobby.description}</List.Description>
                    </List.Content>  
                  </List.Item>
                ))}
              </>

            )}
          </HobbyConsumer>
        </List>
        <div style={{display: "flex", justifyContent: "center", marginTop: "25px"}}>    
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={showForm ? "minus" : "plus"} />
          </Button>
        </div>
        {showForm ? <AddHobby toggle={this.toggleForm}/> : null}

      </>
      )
  }
}
export default Hobbies;
