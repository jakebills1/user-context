import React from 'react';
import { Card, Image, } from 'semantic-ui-react';
import UserForm from './UserForm';
import { UserConsumer, } from '../providers/UserProvider'
const UserProfile = () => (
  <div style={{display: "flex", justifyContent: "space-evenly"}}>
    <UserConsumer>
      {value => (
        <div>
          <Card>
            <Card.Content>
              <Image src="https://loremflickr.com/320/240" />
              <br/>
              <br/>
              <Card.Header>{value.firstName + " " + value.lastName}</Card.Header>
              <Card.Meta>{value.email}</Card.Meta>
            <Card.Content extra>
              <Card.Description>
                <p>{value.description}</p>
              </Card.Description>
            </Card.Content>
            </Card.Content>
          </Card>
        </div>
      )}
    </UserConsumer>
    <div>
      <UserForm />
    </div>
  </div>
)
export default UserProfile;
