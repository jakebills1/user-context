import React from 'react';
import { List, Header, Image, ListContent, } from 'semantic-ui-react';
import { HobbyConsumer, } from '../providers/HobbyProvider'
const Hobbies = () => (
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
)
export default Hobbies;
