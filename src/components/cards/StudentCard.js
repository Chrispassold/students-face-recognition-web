import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'

import { humanize } from 'utils/date'

import './StudentCard.scss'

const StudentCard = ({ name, urlImage, status = false, date = null }) => (
  <Card fluid className={'student'}>
    <Card.Content>
      {!!urlImage && <Image floated='right' size='mini' src={urlImage} />}
      <Card.Header>{name}</Card.Header>
      {!!date && <Card.Meta>{humanize(date)}</Card.Meta>}
    </Card.Content>
    {status ? <Card.Content extra className={'status on'} /> : <Card.Content extra className={'status off'} />}
  </Card>
)

//const StudentCard = ({ name, status = false, urlImage = '', date = null }) => (
//  <Card className={'student'}>
//    <Image src={urlImage} />
//    <Card.Content>
//      <Card.Header>{name}</Card.Header>
//      {!!date && <Card.Meta>{humanize(date)}</Card.Meta>}
//    </Card.Content>
//    {status ? <Card.Content extra className={'status on'} /> : <Card.Content extra className={'status off'} />}
//  </Card>
//)

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool,
  urlImage: PropTypes.string,
  date: PropTypes.object,
}


export default StudentCard