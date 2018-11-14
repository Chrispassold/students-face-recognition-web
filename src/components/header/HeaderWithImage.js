import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const HeaderWithImage = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Lista de chamada</Header.Content>
    </Header>
  </div>
)

export default HeaderWithImage