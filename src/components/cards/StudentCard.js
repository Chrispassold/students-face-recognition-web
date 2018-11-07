import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'
import './StudentCard.scss'

const StudentCard = ({ name, status = false, image = '' }) => (
  <Card className={'student'}>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
    </Card.Content>
    {status ? <Card.Content extra className={'status on'} /> : <Card.Content extra className={'status off'} />}
  </Card>
)

StudentCard.propTypes = {
  name: PropTypes.string,
  status: PropTypes.bool,
  image: PropTypes.string,
}


export default StudentCard